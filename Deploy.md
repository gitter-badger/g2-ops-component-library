## Deployment

### Deploy to Jenkins
To deplpoy a static Styleguist build to jenkins:

Jenkins Job:
https://jenkins.copart.com/view/G1-Ops/job/G2_Ops_Styleguide_Static/

Jenkins build: 
https://jenkins.copart.com/view/G1-Ops/job/G2-Ops-Styleguide/ 

* `Login to Jenkins.`
* `Go to Jenkins build link specified.`
* `Click on Build with Parameters on the left side.`
* `Specify branch name (master, g2-demo, etc).`
* `After building use this build number to deploy on the Jenkins Job specified above.`

### Starting the Server

The above steps install the styleguide on the server
rndgrm401.copart.com

To start the server:
* Login to rndgrm401.copart.com using your valid LDAP credentials.
* Navigate to `/opt/copart/ops-portal/releases/current/`.
* Navigate to styleguide folder `cd styleguide`.
* Run `pm2 serve` here.
* Verify if the build got deployed without errors using pm2 list.
* Verify if the styleguide works correctly on [G2-Ops-Styleguide](https://g2-ops-styleguide.copart.com/)

### Pm2 commands
Pm2 commands to see active deployments.
* `pm2 list` shows all the active
* `pm2 kill` to stop the current server.
* `pm2 serve` to start the server

Thanks for reading!
