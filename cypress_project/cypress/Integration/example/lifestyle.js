///<reference types = "Cypress" />
///<reference types="@cypress/xpath" />

import home_po from "../../support/POM/lifestylestore/Men";

describe('TSC-002', () => {
    const homelink= new home_po();

    it.skip('TC-001', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').should('have.text',"Men")
            cy.log("Men sub-module is present")
            
        } catch (error) {
            cy.log(error)
        }
    });





    it.skip('TC-002', () => {
        
        try {
        homelink.visithomepage();
        cy.xpath('(//span[@class="MuiButton-label"])[8]').click()
        cy.url().should('include','https://www.lifestylestores.com/in/en/department/men')
        cy.log("Men page is present")
        } catch (error) {
            cy.log(error)
        }
    });

    it.skip('TC-003', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').invoke('show').trigger('mouseover')
            cy.contains('Casual Shirts').click({ force: true })
            cy.url().should('include','https://www.lifestylestores.com/in/en/c/men-tops-casualshirts?v=1')
            cy.log("Casual Shirts page is present")
        } catch (error) {
            cy.log(error)
        }
    });

    it.skip('TC-004', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').invoke('show').trigger('mouseover')
            cy.contains('Casual Shirts').click({ force: true })
            cy.xpath('//div[text()="Size"]').click()
            cy.contains("30").click();
            cy.url().should('include','https://www.lifestylestores.com/in/en/c/men-tops-casualshirts?q=%3AsizeAll%3A30')
            cy.log("Size functionality is working")

        } catch (error) {
            cy.log(error)
        }
    });


    it.skip('TC-005', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').invoke('show').trigger('mouseover')
            cy.contains('Casual Shirts').click({ force: true })
            cy.wait(3000)
            cy.contains('load more products').click()
            cy.url().should('include','https://www.lifestylestores.com/in/en/c/men-tops-casualshirts?p=1')
            cy.log("Load more button is working")
        } catch (error) {
            cy.log(error)
        }
    });


    
    it.skip('TC-006', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').invoke('show').trigger('mouseover')
            cy.contains('Casual Shirts').click({ force: true })
            cy.wait(3000)
            // cy.xpath("//div[@class='MuiBox-root jss11088']").click()
            cy.get('img[src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/down-arrow-gray.svg"]').click()
            cy.xpath('(//div[@class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button"])[2]').click({force: true})
            cy.url().should('include','discount')
            cy.log("Discount functionality is working")
        } catch (error) {
            cy.log(error)
        }
    });


    
    it.skip('TC-007', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').invoke('show').trigger('mouseover')
            cy.contains('Casual Shirts').click({ force: true })
            cy.get('#js-site-search-input').click()
            cy.get('#js-site-search-input').type('sneakers').type("{enter}")
            cy.url().should('include','https://www.lifestylestores.com/in/en/search?q=sneakers')
            cy.log("Search functionality is working")
            
        } catch (error) {
            cy.log(error)
        }
    });




});


describe('TSC-003', () => {
    const homelink= new home_po();
    it.skip('TC-008', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').click()
            cy.xpath("(//div[@class='slick-track'])[1]").should('not.be.empty')
            } catch (error) {
                cy.log(error)
            }
    });



    it.skip('TC-009', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').click()
            cy.contains('Deal Corner').should('have.text','Deal Corner')
            cy.log("Deal Corner found")
            
            } catch (error) {
                cy.log(error)
            }
    });

    it.skip('TC-010', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').click()
            cy.contains('Must Have T-Shirts').should('have.text','Must Have T-Shirts')
            cy.log("Must Have T-Shirts is found")
            } catch (error) {
                cy.log(error)
            }
    });


    it.skip('TC-011', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').click()
            cy.contains('Denim Destination').should('have.text','Denim Destination')
            cy.log("Denim Destination is found")
            
            } catch (error) {
                cy.log(error)
            }
    });


    it.skip('TC-012', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').click()
            cy.contains('Formal Store').should('have.text','Formal Store')
            cy.log("Formal Store is found")
        
            } catch (error) {
                cy.log(error)
            }
    });


    it.skip('TC-013', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').click()
            cy.wait(5000)
            cy.contains('Shop By Category').should('have.text','Shop By Category')
            cy.log("Shop By Category is found")
        
            } catch (error) {
                cy.log(error)
            }
    });


    it.skip('TC-014', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').click()
            cy.contains('Most loved brands').should('have.text','Most loved brands')
            cy.log("Most loved brands is found")
        
            } catch (error) {
                cy.log(error)
            }
    });


    it.skip('TC-015', () => {
        try {
            homelink.visithomepage();
            cy.xpath('(//span[@class="MuiButton-label"])[8]').click()
            cy.contains('Essentials For You').should('have.text','Essentials For You')
            cy.log("Essentials For You is found")
        
            } catch (error) {
                cy.log(error)
            }
    });

});