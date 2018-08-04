## Classes

<dl>
<dt><a href="#MoarHealth">MoarHealth</a></dt>
<dd><p>MoarHealth -- Web User Interface for the Moar Health App</p>
<p><p>
Moar Health is an application focused on helping users improve their health through data, anylyitcs, and social
networking.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#moarHealth">moarHealth(T)</a></dt>
<dd><p>Initialize Moar Health and support a private scope for application logic.</p>
</dd>
</dl>

<a name="MoarHealth"></a>

## MoarHealth
MoarHealth -- Web User Interface for the Moar Health App
<p>
Moar Health is an application focused on helping users improve their health through data, anylyitcs, and social
networking.

**Kind**: global class  

* [MoarHealth](#MoarHealth)
    * [new MoarHealth()](#new_MoarHealth_new)
    * [.start(firebase)](#MoarHealth+start)

<a name="new_MoarHealth_new"></a>

### new MoarHealth()
Specific the initialization of MoarHealth

<a name="MoarHealth+start"></a>

### moarHealth.start(firebase)
Handle a call back that executes when the browser's DOM is fully loaded and we have an instance of firebase.

**Kind**: instance method of [<code>MoarHealth</code>](#MoarHealth)  
**See**: https://firebase.google.com/docs/reference/js/firebase  

| Param | Type | Description |
| --- | --- | --- |
| firebase | <code>firebase</code> | handle for the firebase API |

<a name="moarHealth"></a>

## moarHealth(T)
Initialize Moar Health and support a private scope for application logic.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| T | [<code>MoarHealth</code>](#MoarHealth) | Instance of MoarHealth |


* [moarHealth(T)](#moarHealth)
    * [~render(element)](#moarHealth..render)
    * [~startAuthUi()](#moarHealth..startAuthUi)
    * [~signout()](#moarHealth..signout)
    * [~onAuthStateChanged(user)](#moarHealth..onAuthStateChanged)

<a name="moarHealth..render"></a>

### moarHealth~render(element)
Update the MoarHealth div and perhaps run post update function

**Kind**: inner method of [<code>moarHealth</code>](#moarHealth)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>ReactElement</code> | React Element to Render for the Moar Health DIV |

<a name="moarHealth..startAuthUi"></a>

### moarHealth~startAuthUi()
Start the Auth UI

**Kind**: inner method of [<code>moarHealth</code>](#moarHealth)  
<a name="moarHealth..signout"></a>

### moarHealth~signout()
Signout from firebase auth, restore the UI to it's initial state, and restart the AuthUI

**Kind**: inner method of [<code>moarHealth</code>](#moarHealth)  
<a name="moarHealth..onAuthStateChanged"></a>

### moarHealth~onAuthStateChanged(user)
Callback for when the auth state has changed.

**Kind**: inner method of [<code>moarHealth</code>](#moarHealth)  

| Param | Type |
| --- | --- |
| user | <code>FirebaseUser</code> | 

