ReadMe

1. All Ruby packages that are used
	'rails'
	'pg', '~> 0.15' 			
		- Use postgresql as the database for Active Record
	'sass-rails', '~> 5.0' 		
		- Use SCSS for stylesheets
	'bootstrap-sass', '~> 3.3.6'
		- Use bootstrap
	'uglifier', '>= 1.3.0'	 	
		- Use Uglifier as compressor for JavaScript assets
	'coffee-rails', '~> 4.1.0'  
		- Use CoffeeScript for coffee assets and views
	'jquery-rails' 				
		- Use jquery as the JavaScript library
	'turbolinks'  				
		- Turbolinks makes following links in your web application faster.
	'jbuilder', '~> 2.0'		
		- Build JSON APIs with ease. 
	'sdoc', '~> 0.4.0', 		
		- Bundle exec rake doc:rails generates the API under doc/api.
	'byebug'					
		- Call 'byebug' anywhere in the code to stop execution and get a debugger console
	'web-console', '~> 2.0'		
		- Access an IRB console on exception pages or by using <%= console %> in views
	'spring'					
		- Spring speeds up development by keeping your application running in the background.

2. All other APIs or dependencies
	We are using no other APIs currently.

3. Approximate number of hours your team spent learning Ruby
	Collectively we have spent about 15 hours learning Ruby. This includes time in class as well as independent research. 

4. Approximate number of hours your team spent implementing the MVP
	Our team has spent about 10 hours implementing the MVP. This includes getting the webpage up and running, configuring the incidents application, and designing the webpage. We have implemented a way to enter a new incident, view the open incidents on the timeline, and displaying particular incidents on the web browser.

5. The challenges your team faced working on this leg
	Our biggest challenge was configuring the application. There are a lot of small details that we didn't initally know how to do, so we had to do some research on that. Also, generally understanding how to use Ruby on Rails and all of the minor details that come along with that. 
	After getting our incidents page up and running, it became clear to us that we might have to modify our models for the database to make sure we have enough fields to store information and that we are storing them in the most efficient way, but still making sure that it is easy to query.

6. Why you chose the Ruby web framework that your team used?
	We chose to use Ruby on Rails. There are many benefits of Rails. First of all, Rails' configuration conventions help speed up the development provess and allow for the progammers to avoid spending a lot of time working on the configuration settings. Secondly, it is a popular, open source web framework so there is a large amount of information on the internet about working with Rails. It is object oriented, handles changes very easily, and it has a very good testing framework.

	After comparing Rails with other frameworks like Sinatra, it is clear that one of the major distinctions is that Rails handles security concerns much better than others. Sinatra is very simple and easy to use; however, it doesn't necessarily handle security concerns such as Cross-site Request Forgery, SQL Injection, XSS, HTML Injection, and more. Rails handles scaling very nicely like renaming assets in all necessary locations every time they change.

	However, with all of these benefits there are some problems that come with Rails. This includes not all hosts can support rails, Ruby isn't as commonly used as Java and PHP, and Rails isn't as fast as Java or C so there are some performance concerns. 

	Ruby on Rails sources:
	https://bitzesty.com/2014/01/10/ruby-on-rails-what-it-is-and-why-we-use-it-for-web-applications/
	http://codefol.io/posts/Why-Rails-and-not-Sinatra-or-Node-js

7. Why you chose the database that your team used?
	We chose postgresql because it is a widely used database that has large amounts of documentation available online. It has informative error messages. It is capable of handling many tasks efficiently. It has "complete support for reliable transactions, i.e. Atomicity, Consistency, Isolation, Durability (ACID)." Therefore it is guaranteed to be reliable. It supports many data types. Lastly, there are many thrid party libraries made to help Postgres be simple to use.

	PostgreSQL sources:
	https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems
