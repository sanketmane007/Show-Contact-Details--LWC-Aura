({
    
    doInit:function(component, event, helper){
        /* step 1 */
        var action = component.get('c.getContactList')
        /* Optional Step 2 */
        action.setParams({
            
        });
        /* step 4*/ 
        action.setCallback(this, function(response){
            var responseValue=response.getReturnValue();
            console.log('responseValue', responseValue);
        	component.set('v.contactList',responseValue)
        
        });
        
        /* step 4*/
        $A.enqueueAction(action,false);
    }
    
})
