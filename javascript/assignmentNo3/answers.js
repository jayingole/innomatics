//Question 1

 function atmWithdrawal(balance, amount, pin, enteredPin) {

     if(pin!= enteredPin){
           
        console.log("inncorrect pin");
     }else if(amount>balance){
         console.log("insufficient funds");

     }else if(amount%100!==0){

        console.log("enter the amoount in 100's");

     }else {

      console.log("widrawal successfull");
     }

    

}
atmWithdrawal(2000, 2001, 1111, 1111);


// Question2

function calculateFinalAmount(orderAmount){
   let final=0;
   if(orderAmount>1000){
              
      final=orderAmount-(0.2*orderAmount);

   }else if(orderAmount>=500 && orderAmount<=1000){

      final=orderAmount-(0.1*orderAmount);

   }else if(orderAmount<500){

      final=orderAmount-(0*orderAmount);
   }

   if(orderAmount<50){
                 
          console.log("final amount is",final,"and 10$ shipping");
   }else{

      console.log("final amount is",final,"and free shipping");   
   }


}

calculateFinalAmount(600);


// Question 3

function calculateGrade(marks, attendance){

      if(attendance>=90 && attendance<=100){
            
         marks =marks+5;
         console.log("the grade is A and the marks are",marks);

      }else if(attendance>=80 && attendance<=89){
             
         console.log("the grade is B and the marks are",marks);

      }else if(attendance>=70 && attendance<=79){
         console.log("the grade is C and the marks are",marks);

      }else if(attendance>=60 && attendance<=69){
         console.log("the grade is D and the marks are",marks);

      }else if(attendance<60){

         console.log("the grade is F and the marks are",marks);
         
      }else if(attendance<0 || attendance>100){

         console.log("enter the attendence between 0 and 100");
      }
}

calculateGrade(100, 59);


// Question 5

function calculateTicketPrice(age, showTime) {
   let standardPrice = 12;
   let final = standardPrice;

   
   if (showTime < 17) {
      final = standardPrice - (standardPrice * 0.2);
   }

  
   if (age < 12) {
      final = final - (final * 0.4); 
   } else if (age > 60) {
      final = final - (final * 0.3); 
   }

   
   if (showTime >= 17 && age >= 12 && age <= 60) {
      final = standardPrice; 
   }

   console.log("The amount is $",final); 
}


calculateTicketPrice(61,18);


// // question4

function trafficLightControl(density){
        
      if(density==="heavy"){

         console.log(" Green for 60 seconds");
      }else if(density==="moderate"){
        console.log(" Green for 40 seconds");

      }else if(density==="low"){
        console.log(" Green for 20 seconds");

      }

}

trafficLightControl("low");

// Question 6


function isEligibleForJob(age, experience, qualification){

           if(age<21 || age>55){


              console.log("age is not satisfied");
            
            }else if(experience<2){

                console.log("experience is not satisfied");
            }else if(qualification!="Bachelor's Degree"){

                console.log("qulification is not satisfied");
            }else{console.log("applicant is eligible");}

        

}isEligibleForJob(56,3,"Bachelor's Degree");

// Question 7

function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        return orderAmount * 0.90; 
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        return orderAmount;  
    } else {
        return orderAmount;  
    }
}

console.log(applyCoupon(600, "DISCOUNT10"));  
 

// Question 8

function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "Basic") {
        return "Basic Plan: $20/month - Gym access only.";
    } else if (planType === "Premium") {
        if (wantsTrainer && wantsDietPlan) {
            return "Upgrade to VIP Plan: $80/month - Gym + Trainer + Diet Plan.";
        } else if (wantsTrainer) {
            return "Premium Plan: $50/month - Gym + Trainer.";
        } else {
            return "Premium Plan: $50/month - Gym.";
        }
    } else if (planType === "VIP") {
        return "VIP Plan: $80/month - Gym + Trainer + Diet Plan.";
    } else {
        return "Invalid plan type. Please choose Basic, Premium, or VIP.";
    }
}


console.log(choosePlan("Premium", true, false));  

// Question 9

function calculateElectricityBill(units, timeOfDay) {
    let rate;

    
    if (timeOfDay >= 8 && timeOfDay < 20) {
        if (units <= 100) rate = 5;
        else if (units <= 300) rate = 4;
        else rate = 3;
    } else { 
        if (units <= 100) rate = 5;
        else if (units <= 300) rate = 4;
        else rate = 3;

        
        rate *= 1.10;
    }

    return units * rate;  
}

console.log(calculateElectricityBill(50, 10));


// question10

function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let additionalCharge = 0;

    
    if (classType === "Business") additionalCharge += 200;
    else if (classType === "First") additionalCharge += 500;

   
    if (luggageWeight > 20) {
        let extraLuggage = Math.ceil((luggageWeight - 20) / 10);
        additionalCharge += extraLuggage * 50; 
    }

    
    let totalFare = baseFare + additionalCharge;

    
    if (isStudent) totalFare *= 0.85;  
    if (isSenior) totalFare *= 0.90;  
   
    console.log("Total Fare: $" + totalFare.toFixed(2));
}
calculateFlightFare("Business", 25, true, false); 





