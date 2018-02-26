First is run the wamp server
Then left click the wamp icon and pick www directory
remove the files inside the www directory
copy the files from the website folder and paste it in the www directory
type "localhost" in google
The website should now be opened
Now, if you want to add a domain name 
First is to open the httpd.conf, can be found in the wampserver menu
Next is to uncomment "Include conf/extra/httpd-vhosts.conf"
Now add a text file in "C:\wamp\bin\apache\Apache-VERSION\conf\extra\" with the following content
ServerAdmin admin@website.com
DocumentRoot "C:\wamp\www" // or where the website files are located
ServerName  coursewebsite.com
ErrorLog "logs/website.com.log"
CustomLog "logs/website.com-access.log"
Finally edit the hosts file usually located in C:\Windows\System32\drivers\etc
Add
	Ip Address	ServerName