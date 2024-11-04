import {Button, Card, Col, Flex, Row, Typography} from "antd";
import {CrownOutlined, FilePdfOutlined, HddOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

export default function Home() {
  return (
      <Row gutter={16}>
          <Col span = {17}>

              <Row gutter={16}>
                  <Col span={8}>
                      <Card>
                          <Flex align='center' gap={16}>
                              <div className={'text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-red-200 '}>
                                  <CrownOutlined/>
                              </div>
                              <div>

                              <Title level={4} style={{marginBottom : 0}}>
                                  24
                              </Title>
                              <Typography>
                                  Enrolled Courses
                              </Typography>
                              </div>
                          </Flex>
                      </Card>
                  </Col>

                  <Col span={8}>
                      <Card>
                          <Flex align='center' gap={16}>
                              <div className={'text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-green-200 '}>
                                  <HddOutlined/>
                              </div>
                              <div>

                                  <Title level={4} style={{marginBottom : 0}}>
                                      56
                                  </Title>
                                  <Typography>
                                      Lessons
                                  </Typography>
                              </div>
                          </Flex>
                      </Card>
                  </Col>

                  <Col span={8}>
                      <Card>
                          <Flex align='center' gap={16}>
                              <div className={'text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-yellow-200 '}>
                                  <FilePdfOutlined/>
                              </div>
                              <div>

                                  <Title level={4} style={{marginBottom : 0}}>
                                      10
                                  </Title>
                                  <Typography>
                                      Certifications
                                  </Typography>
                              </div>
                          </Flex>
                      </Card>
                  </Col>
              </Row>

          </Col>
          <Col span = {7}>progress</Col>

      </Row>
  );
}
