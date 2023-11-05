import styles from "../Styles";
import { Text, View, Button} from "react-native";

const TaskCard = (props) => {
    return(
        <View style={styles.taskContainer}>
            <Text style={styles.task}>{props.task}</Text>
            <Button color={'red'} title="Delete" onPress={()=>{props.deleteTask(props.index)}}/>
        </View>
    )
}


export default TaskCard;