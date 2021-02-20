import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        backgroundColor:'#E9ECEE',
        height:50,
        marginVertical:10,
    },
    image:{
        height:50,
        width:50,
        marginRight:10,
    },
    left:{
        flexDirection:'row',
        alignItems:'center',
    },
    name:{
        fontWeight:'bold',
        marginBottom:5,
    },
    symbol:{
        color:'#6b6b6b',
    },
    value:{
        fontSize:10,
        fontWeight:'bold',
        marginBottom:5,
    },
    amount:{
        fontSize:10,
        fontWeight:'bold',
        marginBottom:5,
    },
    place:{
        fontSize:10,
        fontWeight:'bold',
        width:30,
    }
});

export default styles;