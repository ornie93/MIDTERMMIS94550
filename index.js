function process(){
    location.href = "page2.html";    
}

function calculate(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var monthly_salary = document.getElementById('monthly-salary').value;
    
    var yearly_salary = monthly_salary * 12;

    var monthly_bonus = 0;

    if(age > 35 && yearly_salary >= 300000)
    {
        monthly_bonus = .40 * monthly_salary;
    }
    else if(age > 30 && yearly_salary >=200000)
    {
        monthly_bonus = .30 * monthly_salary;
    }
    else if(age > 25 && yearly_salary >=100000)
    {
        monthly_bonus = .20 * monthly_salary;
    }
    else
    {
        monthly_bonus = .10 * monthly_salary;
    }

    var yearly_bonus = monthly_bonus * 12;

    p1.innerText = "Name = " + name;
    p2.innerText = "Total Yearly Bonus Amount = " + yearly_bonus;
    
}