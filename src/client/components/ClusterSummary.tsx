import React, { Suspense } from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const RealTimeChart = React.lazy(() => import('../graphs/RealTimeChart'))
// import RealTimeChart from '../graphs/RealTimeChart';
import { BROKERS_CPU_USAGE, BROKER_JVM_MEMORY_USAGE } from '../queries/graphQL';


const ClusterSummary = () => {
    console.log('Cluster Summary component');
    return (
        <>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4}}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Paper
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                      }}
                      elevation={8}>
                        <Suspense fallback={<div>Loading...</div>}>
                          <RealTimeChart
                            key = {'CPUUsageRTC'}
                            query={ BROKERS_CPU_USAGE }
                            metric = {'CPUUsageOverTime'}
                            resources = {'brokers'}
                            yLabel={'CPU Usage'}
                            title={'CPU Usage Over Time'}
                            step={'30s'}
                            labelName={'Broker'}
                            labelId={'id'}/>
                        </Suspense>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Paper
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                      }}
                      elevation={8}>
                        <Suspense fallback={<div>Loading...</div>}>
                          <RealTimeChart
                            key = {'JVMUsageRTC'}
                            query = {BROKER_JVM_MEMORY_USAGE}
                            metric = {'JVMMemoryUsedOverTime'}
                            resources = {'brokers'}
                            yLabel={'Memory Usage'}
                            title = {'Memory Usage Over Time'}
                            step={'30s'}
                            labelName={'Broker'}
                            labelId={'id'}/>
                        </Suspense>
                    </Paper>
                  </Grid>
                </Grid>
            </Container>
        </>
    )
};

export default ClusterSummary;