import {Avatar, Card, Flex, Progress, Typography} from "antd";
import Title from "antd/es/typography/Title";

function ProgressComponent() {
    return (
        <Card title='Progress'>
            <Flex vertical align='center'>
            <Avatar size={64} src='/profile.jpg'/>
                <Title level={4} style={{marginBottom : 3 , marginTop: 5}}>
                    Ghazal Jamalzadeh
                </Title>
                <Typography type = 'secondary'>Basic Member</Typography>
            </Flex>
            <Typography>Java</Typography>
            <Progress percent={70} status={"active"}/>

            <Typography>Kotlin</Typography>
            <Progress percent={60} status={"active"}/>

            <Typography>Dart</Typography>
            <Progress percent={50} status={"active"}/>

            <Typography>Flutter</Typography>
            <Progress percent={70} status={"active"}/>

            <Typography>React</Typography>
            <Progress percent={20} status={"active"}/>
        </Card>

    )
}

export default ProgressComponent;