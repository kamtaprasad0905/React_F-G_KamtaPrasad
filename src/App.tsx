import "./App.css";
import CustomerReview from "./containers/CustomerReview";
import { Routes, Route } from "react-router-dom";
import routes from "./constants/routes";
import Reviews from "./containers/Reviews";
import ThankYouCard from "./containers/ThankYouCard";
function App() {
  return (
    <Routes>
      <Route path={routes.addReview} element={<CustomerReview />} />
      <Route path={routes.allReviews} element={<Reviews />} />
      <Route path={routes.thanks} element={<ThankYouCard />} />
    </Routes>
  );
}

export default App;
