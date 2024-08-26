
import { StyleSheet } from 'react-native';
import { colors, spacing, fontSizes, fonts } from '../../../style'; 
import { text } from '@fortawesome/fontawesome-svg-core';
import { width } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faZ } from '@fortawesome/free-solid-svg-icons';

export const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    highlight: {
        color: colors.secondary,
        fontWeight: '700',
    },
    container: {
        flex: 1,
        padding: spacing.medium,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    containerShadow: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: fontSizes.xl,
        fontWeight: '700',
        fontFamily: fonts.bold,
        color: colors.primary,
        marginTop: spacing.medium,
        textAlign: 'left',
    },
    containerButton: {
        width: '80%',
    },
    ButtonLogin: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '100%',
    },
    ButtonLoginText: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    registerContainer: {
        alignItems: 'center',
    },
    login: {
        fontWeight: 'bold',
        color: colors.primary,
    },
    logoImagen: {
        alignItems: 'center',
        height: '10%',
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    
    // Header

    containerHeader:{
        width: '100%',
        flexDirection: 'row',
    },
    containerText:{
        width: '75%',
        flexDirection: 'column',
    },
    containerImage:{
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    circleContainer: {
        width: 70, 
        height: 70,
        borderRadius: 50, 
        backgroundColor: '#fff',
    
        // iOS Shadows
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        // Android Shadows
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //Personal Information

    personalInformation:{
        width: '100%',
    },

    textInformation:{
        width: '100%',
        fontSize: fontSizes.smedium,
        fontStyle: 'italic',
        color: colors.primary,
        fontWeight: '300',
    },  
    textInformationSmall:{
        width: '60%',
        fontSize: fontSizes.small,
        fontStyle: 'italic',
        color: colors.primary,
        fontWeight: '300',
    },  

    //Score
    scoreContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
    },

    scoreImage:{
        width: '100%',
    },

    // TrainingEntries
    trainingEntries:{
        width: '100%',
    },
    titleTries:{
        fontSize: fontSizes.medium,
        color: colors.primary,
        fontWeight: '700',
    },
    containerFilter:{
        width:  '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textFilter:{
        fontSize: fontSizes.small,
        color: colors.primary,
        fontWeight: '400',
        padding: spacing.small,
    },
    filterItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    // Entries

    containerEntries:{
        width: '100%',
        flexDirection: 'column',
    },
    
    rowEntries:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: spacing.medium,
    },
    containerEntry: {
        borderColor: colors.secondary,
        borderWidth: 2,
        width: '45%',
        padding: spacing.medium,
        borderRadius: 10,
    },
    textEnty:{
        fontSize: fontSizes.small,
        color: colors.primary,
        fontWeight: '400',
        fontStyle: 'italic',
        marginTop: spacing.small,
    },
    titleEnty:{
        fontSize: fontSizes.smedium,
        color: colors.primary,
        fontWeight: '600',
        fontStyle: 'italic',
    },
    floatingButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: colors.secondary,
        borderRadius: 8,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    trainingTitle: {
        fontSize: fontSizes.medium,
        color: colors.primary,
        fontWeight: '700',
        marginBottom: spacing.medium,
        marginTop: spacing.medium,
    },
    



});

export default styles;