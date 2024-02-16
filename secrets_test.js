# Test regular endpoints

https://www.site.com/find_this_endpoint?param1=true

# Test html endpoint

<a href="https://www.site.com/find_this_href_endpoint?param2=true">test</a>

# Test ajax endpoints

$.ajax({
  url: "test.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});

# Test secret keys

## All the keys here are false, for testing tools that detect the leak, don't bother.

SHODAN_API_KEY = "gCpIwXNTQP2s4qualIaDcIhNeEePo2pu" 

# Test user and password

## User and password in Json format

  context "and there is an ar_config" do
    let(:adapter) { :mysql }
    let(:ar_config) do
      {
        adapter: adapter.to_s,
        username: "bobby",
        password: "jackiechain",
        host: "db_host",
        port: 0_001,
        database: "db_database"
      }
    end
    
    let(:source) { { email: 'user@example.org', password: 'whatever', param: true } }

## User and password on config files (yalm)

    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: mysql

  postgres:
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_PASSWORD=postgres

## Regular user and password

Grantinee.configure do |c|
  c.engine   = :mysql

  c.username = 'root'
  c.password = 'mysql'
  c.hostname = 'localhost'
  c.port     = 3306
  c.database = 'database_name'
end

 Necromancer.connection = mysql.connector.connect(host='localhost',
                                                 database='icecrown',
                                                 user='aroot',
                                                 password='aroot')

USERNAME = "superman"
PASSWORD = "kryptonite"


## User and password on properties files (java)

spring.datasource.url=jdbc:mysql://localhost/icecrown?createDatabaseIfNotExist=true&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&zeroDateTimeBehavior=convertToNull
spring.datasource.username=spring
spring.datasource.password=123456

# Test Telegram

## All the keys here are false, for testing tools that detect the leak, don't bother.

TELEGRAM_TOKEN_ID = '1809213853:AAGr2DkzlDF9BiyH24YOJKwkCogLIMFfieU'
TELEGRAM_CHAT_ID = '1865210816'


<Postcoder
	className="w-full text-teal border-teal rounded-md border-2 py-2 px-2 mb-2 text-xl text-left mx-auto"
	placeholder="Enter your postcode"
	apiKey="PCWJJ-BKG7P-7M5Q2-TV6LR"
	onChange={(e) => onChange(e.target.value)}
	onSelected={(data) => {
		console.log(data)
		// onChange(data.postcode)
		setSelected(true)
		setValue('address_1', data.addressline1, { shouldValidate: true })
		setValue('address_2', data.addressline2)
		setValue('city', data.posttown, { shouldValidate: true })
		setValue('postcode', data.postcode, { shouldValidate: true })
	}}
/>