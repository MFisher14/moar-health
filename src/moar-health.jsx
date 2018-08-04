'use strict'

const attach = require('farnsworth-attach')

/**
 * MoarHealth -- Web User Interface for the Moar Health App
 * <p>
 * Moar Health is an application focused on helping users improve their health through data, anylyitcs, and social
 * networking.
 */
class MoarHealth {
    /**
     * Handle a call back that executes when the browser's DOM is fully loaded and we have an instance of firebase.
     *
     * @see https://firebase.google.com/docs/reference/js/firebase
     *
     * @param {firebase} firebase handle for the firebase API
     */
    start(firebase) {}

    /**
     * Specific the initialization of MoarHealth
     */
    constructor() { Object.freeze(moarHealth(this)) }
}

/**
 * Initialize Moar Health and support a private scope for application logic.
 *
 * @param {MoarHealth} T Instance of MoarHealth
 */
function moarHealth(T) {
    let firebase, moarHealthDiv, authUi, initialHtml

    /**
     * Update the MoarHealth div and perhaps run post update function
     * @param {ReactElement} element React Element to Render for the Moar Health DIV
     */
    function render(element) {
        ReactDOM.render(element, moarHealthDiv)
    }

    /**
     * Start the Auth UI
     */
    function startAuthUi() {
        authUi.start('#MoarHealth', {
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ],
            tosUrl: 'https://moarhealth.com/terms-of-service',
            privacyPolicyUrl: 'https://moarhealth.com/privacy-policy',
            callbacks: {
                signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                    return false
                }
            }
        })
    }

    /**
     * Signout from firebase auth, restore the UI to it's initial state, and restart the AuthUI
     */
    function signout() {
        firebase.auth().signOut()
        render(initialHtml)
        startAuthUi()
    }

    /**
     * Callback for when the auth state has changed.
     *
     * @param {FirebaseUser} user
     */
    function onAuthStateChanged(user) {
        if(user) {
            render(
                <div>
                    <p>Hello {user.displayName}</p>
                    <button onClick={signout}>Sign Out</button>
                </div>
            )
        } else {
            startAuthUi()
        }
    }

    const start = attach(T, function start(firebase_) {
        moarHealthDiv = document.getElementById('MoarHealth')
        try {
            firebase = firebase_
            authUi = new firebaseui.auth.AuthUI(firebase.auth())

            initialHtml = <p>Please Sign In</p>
            render(initialHtml)

            firebase.auth().onAuthStateChanged(onAuthStateChanged)

        } catch (e) {
            render(<div style="color: red">Error loading page.</div>)
            console.log(e)
        }
    })
}

window.moarHealth = new MoarHealth();