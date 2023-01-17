/**
 * client_id	Required. The client ID for your GitHub App.
 *              You can find this in your GitHub App settings when you select your app.
 *              Note: The app ID and client ID are not the same, and are not interchangeable.
 *
 * redirect_uri	The URL in your application where users will be sent after authorization.
 *              This must be an exact match to one of the URLs you provided as a Callback URL
 *              when setting up your GitHub App and can't contain any additional parameters.
 *
 * state	    This should contain a random string to protect against forgery attacks
 *              and could contain any other arbitrary data.
 *
 * login	    Suggests a specific account to use for signing in and authorizing the app.
 *
 * allow_signup	Whether or not unauthenticated users will be offered an option
 *              to sign up for GitHub during the OAuth flow.
 *              The default is true. Use false when a policy prohibits signups.
 */
type credentials = {
    client_id: string,
    redirect_uri: string,
    state?: string,
    login?: string,
    allow_signup?: string,
}

export default credentials