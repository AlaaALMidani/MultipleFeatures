import logo from './logo.svg';
import './App.css';
import FamilyBudgetManagement from './components/family-budget-management/FamilyBudgetManagement'
import InvoiceCalculation from './components/invoice-calculation-with-discounts/InvoiceCalculation'
function App() {
  return (
    <div className="App">
   <FamilyBudgetManagement/> 
    <InvoiceCalculation/>

    </div>
  );
}

export default App;
