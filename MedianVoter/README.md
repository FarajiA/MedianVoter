# MedianVoter

This project codename MedianVoter is the skeleton for the server side API of creating a program that users can use for a host of governement lookup information. 

Some of the highlights of the server app: 
- Locate House Representatives & U.S. Senators
- Find Members of House or Senate
- Search for a Bill by ID, search term, or Member who introduced it
- Find Vote Rollcall in chamber

# Setup Application

First begin by running `npm install` in the working directory.

Once all packages are complete then run `grunt` command or if using Visual Studio just run the program. The server is set to run on **localhost:3000**, this is where you'd begin entry to the endpoints. 

# API Routes

**District**<br/>
/api/district/{zipcode}<br/>
/api/district/{lat}/{long}<br/>

**Member**<br/>
/api/member/{memberID}<br/>
/api/member/region/{state}<br/>
/api/member/region/{state}/{district}<br/>
/api/member/votes/{memberID}<br/>
/api/member/votes/{billID}/{memberID}<br/>

**Bills**<br/>
/api/bill/{billID}<br/>
/api/bill/search/{query}<br/>
/api/bill/subject/search/{subject}<br/>
/api/bill/subject/{subject} <br/>
/api/bill/member/{memberID}/{type}<br/>

**Vote**<br/>
/api/vote/rollcall/:chamber/{rollcall}<br/>
/api/vote/rollcall/:chamber/{rollcall}/{congress}<br/>

# 3rd Party API's
This server app takes advantage of the following API's<br/>
[Propublic Congress API](https://api.propublica.org/congress/v1)<br/>
[Sunlight Foundation API](https://sunlightfoundation.com/api)<br/>




