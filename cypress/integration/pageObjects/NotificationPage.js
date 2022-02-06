class NotificationPage{

    clickHereButton(){
        return cy.get('[href="/notification_message"]');
    }

    notificationMessage(){
        return cy.get('#flash');
    }
}
export default NotificationPage;