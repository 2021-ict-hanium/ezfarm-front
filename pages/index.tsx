import RecentNotification from '../components/RecentNotification';
import UserCurrentDashboard from '../components/UserCurrentDashboard';
import Layout from '../layout/Layout';

const Home = () => (
    <Layout title="HOME">
        <>
            <RecentNotification />
            <UserCurrentDashboard />
        </>
    </Layout>
);

export default Home;
