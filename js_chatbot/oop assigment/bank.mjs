class Bank {
  constructor(bank_names, branch_names) {
    this.bank_names = bank_names;
    this.branch_names = [];
  }
  add_branch(added) {
    this.branch_names.push(added);
  }
  remove_branch(rmve_branch) {
    this.branch_names.splice(this.branch_names.indexOf(rmve_branch), 1);
  }
  display_branches() {
    console.log(
      `Bank name: ${this.bank_names} Branch name : ${this.branch_names}`
    );
  }
}

const bank1 = new Bank("HBL");
bank1.add_branch(123);
bank1.display_branches();
bank1.remove_branch(123);
bank1.display_branches();
