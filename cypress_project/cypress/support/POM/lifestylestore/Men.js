


class home_po{
    visithomepage(){
        cy.visit("https://www.lifestylestores.com/in/en/")
        cy.wait(5000)
        cy.get("#moe-dontallow_button").click()
      
    }
}
export default home_po;