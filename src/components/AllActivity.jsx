import Layout from "./Layout";
import Activity from "./Activity";

const AllActivity = () => {
  const { ActivityCard } = Activity();
  return (
    <Layout>
      <div className="grow bg-white">
        <h1 className="text-center text-2xl p-4 font-bold">All Activity</h1>
        <div className="bg-white grid sm:grid-cols-2 xl:grid-cols-3 gap-8 p-4 ">
          <ActivityCard />
        </div>
      </div>
    </Layout>
  );
};

export default AllActivity;
