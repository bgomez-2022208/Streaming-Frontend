/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { useChannels, useUserDetails } from "../../shared/hooks";
import { Sidebar } from "../../components/navbars/Sidebar";

import "./dashboardPage.css";

export const DashboardPage = () => {
  const { getChannels, allChannels, isFetching, followedChannels } = useChannels();
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getChannels(isLogged);
  }, []);

  if (isFetching) {
    <LoadingSpinner />;
  }
  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar channels={followedChannels}/>
      <Content channels={allChannels || []} getChannels={getChannels} />
    </div>
  );
};
