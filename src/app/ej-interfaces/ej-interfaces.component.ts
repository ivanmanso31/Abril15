import { Component } from '@angular/core';
import { Loan } from '../-modelo/loan';
import { ConventionalLoan } from '../-modelo/conventionalLoan';

@Component({
  selector: 'app-ej-interfaces',
  standalone: true,
  imports: [],
  templateUrl: './ej-interfaces.component.html',
  styleUrl: './ej-interfaces.component.css'
})
export class EjInterfacesComponent {
  ejercicioInterfaces(){
  function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    function calculateConventionalLoanPayment(conventionalLoanTerms: ConventionalLoan): string {
      // Calculates the monthly payment of a conventional loan
      let interest = conventionalLoanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
      let payment;
      payment = conventionalLoanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), conventionalLoanTerms.months)));
      return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    let loanTerms: Loan = {principal:30000, interestRate:5};
    let interestOnlyPayment = calculateInterestOnlyLoanPayment(loanTerms);
    let conventionalLoanTerms: ConventionalLoan = {principal:30000, interestRate:5, months:180};
    let conventionalPayment = calculateConventionalLoanPayment(conventionalLoanTerms);

    console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
    console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
  }
}
