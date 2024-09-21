import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../style';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import styles from './style/patientScreenStyles';
import { fetchPatientSessions } from '../../services/apiPatientSessions';

const PatientScreen = () => {

    type Session = {
        session: {
            session_date: string;
            pose_video: { url: string };
            stride_video: { url: string };
            completion: string;
        };
        score: {
            couro_score: string;
            shoulder_score: string;
            elbow_score: string;
            hip_score: string;
            knee_score: string;
        };
    };
    
    type SessionData = {
        data: Session[];
        message: string;
    };

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'Patient'>>();

    const [sessionData, setSessionData] = useState<SessionData | null>(null);
    const baseUrl = 'http://ec2-18-205-159-164.compute-1.amazonaws.com';

    // Couro Average 

    const [averageCouroScore, setAverageCouroScore] = useState<number | null>(null);


    useEffect(() => {
        const loadPatientSessions = async () => {
            try {
                const patientId = route.params?.patientId;
                console.log('Patient ID:', patientId);
                if (patientId) {
                    const data = await fetchPatientSessions(baseUrl, patientId);
                    console.log('Session data:', JSON.stringify(data, null, 2)); // Imprimir con formato
                    setSessionData(data);


                    // Average Couro
                if (data.data && data.data.length > 0) {
                    const totalScore = data.data.reduce((acc: number, item: Session) => {
                        const score = parseFloat(item.score.couro_score);
                        return acc + (isNaN(score) ? 0 : score); // Maneja NaN correctamente
                    }, 0);
                    const averageScore = totalScore / data.data.length;
                    setAverageCouroScore(averageScore);
                }

                }
                
            } catch (error) {
                console.error('Error fetching session data:', error);
            }
        };
    
        loadPatientSessions();
    }, [route.params?.patientId]);


    const handleSessionClick = (session: Session) => {
        navigation.navigate('TrainingSession', {
            couro_score: session.score.couro_score,
            shoulder_score: session.score.shoulder_score,
            elbow_score: session.score.elbow_score,
            hip_score: session.score.hip_score,
            knee_score: session.score.knee_score,
            pose_video_url: session.session.pose_video.url,
            stride_video_url: session.session.stride_video.url,
            completion: session.session.completion,
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.containerHeader}>
                    <View style={styles.containerText}>
                        <Text style={styles.title}>
                            {route.params?.patientName || "Patient"} {"\n"}
                        </Text>

                        <Text style={styles.textInformation}>
                        {`Height: ${route.params?.height} ● Weight: ${route.params?.weight} lbs`}
                        </Text>

                    </View>

                    <View style={styles.containerImage}>
                        <TouchableOpacity 
                        style={styles.circleContainer}
                        onPress={() => navigation.navigate('Home')}
                        >
                            <FontAwesomeIcon icon={faHome} size={30} color={colors.secondary} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Personal Information */}    
                <View style={styles.personalInformation}>
                    <Text style={styles.textInformationSmall}>
                        {`: ${route.params?.birthdate}`}
                    </Text>
                </View>

             {/* Score Container */}
                {averageCouroScore !== null && sessionData && sessionData.data?.length > 0 && (
                    <View style={styles.scoreContainer}>
                        <Text style={styles.couroTitle}>Couro Score Average</Text>
                        <Text style={styles.scoreCouro}>
                            {averageCouroScore.toFixed(2)}
                        </Text>
                    </View>
                )}

                {/* Training Entries */}
                <View style={styles.containerEntries}>
                    <Text style={styles.trainingTitle}>
                        Training Entries
                    </Text>

                    {sessionData && sessionData.data?.length > 0 ? (
                        sessionData.data.reduce((result, item, index, array) => {
                            if (index % 2 === 0) {
                                result.push(array.slice(index, index + 2));
                            }
                            return result;
                        }, [] as Session[][]).map((pair, pairIndex) => (
                            <View style={styles.rowEntries} key={pairIndex}>
                                {pair.map((item, itemIndex) => (
                                    <TouchableOpacity
                                        style={styles.containerEntry}
                                        key={itemIndex}
                                        onPress={() => handleSessionClick(item)}
                                    >
                                        <View>
                                            <Text style={styles.titleEnty}>
                                                Running Score:
                                            </Text>
                                            <Text style={styles.scoreEntry}>
                                                {parseFloat(item.score.couro_score).toFixed(2)}
                                            </Text>
                                        </View>
                                        <Text style={styles.textEnty}>
                                            {item.session.session_date}
                                        </Text>

                                        <View style={styles.entyInformation}>
                                            <View style={styles.entyRow}>
                                                <Text style={styles.upInformation}>
                                                    Shoulder: {'\n'}{parseFloat(item.score.shoulder_score).toFixed(2)} 
                                                </Text>
                                                <Text style={styles.upInformation}>
                                                    Hip: {'\n'}{parseFloat(item.score.hip_score).toFixed(2)}
                                                </Text>
                                            </View>
                                            <View style={styles.entyRow}>
                                                <Text style={styles.upInformation}>
                                                    Elbow: {'\n'}{parseFloat(item.score.elbow_score).toFixed(2)} 
                                                </Text>
                                                <Text style={styles.upInformation}>
                                                    Knee: {'\n'}{parseFloat(item.score.knee_score).toFixed(2)}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))
                    ) : (
                        <View style={styles.containerNoTraining}>
                            <Image
                                source={require('../../img/recursos/running.png')}
                                style={{ width: '100%', height: 200 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.NoTrainingTitle}>
                                There are no training sessions
                            </Text>
                            <Text style={styles.NoTrainingText}>
                                Create your first one to get in-depth insights and improve your run
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>

            {/* Floating Button */}
            <TouchableOpacity
                style={styles.floatingButtonContainer}
                onPress={() => navigation.navigate('NewTraining')}
            >
                <FontAwesomeIcon icon={faPlus} size={30} color={colors.primary} />
            </TouchableOpacity>
        </View>
    );
}

export default PatientScreen;
