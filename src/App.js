import logo from './logo.svg';
import './App.css';
import FamilyBudgetManagement from './components/family-budget-management/FamilyBudgetManagement'
import InvoiceCalculation from './components/invoice-calculation-with-discounts/InvoiceCalculation'
import UserFeedbackSystem from './components/user-feedback-system/UserFeedbackSystem';
function App() {
  return (
    <div className="App">
      <FamilyBudgetManagement/>
      <InvoiceCalculation/>
      <UserFeedbackSystem/>
    </div>
  );
}

export default App;
