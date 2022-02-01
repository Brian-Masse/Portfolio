-- create a table

CREATE TABLE entry (
	id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	title varchar(100) NOT NULL,
	description varchar(1000) NOT NULL,
	date datetime not null
);


-- inesrt an entry into a table

insert into entry( title, description, date ) values ( "Test Entry", "this is a test description for this test entry", "2022-1-2 14:47:01" );

--select from a table

select name_of_column from entry;

select * from entry;

select * from entry where id="7" AND title="test"


-- cahnge data:

update 	table_name
set column_name="new data here", second_column_name="second new data here"
where id="1"

--delete data

delete from table_name
where id="1"

-- order data

select * table_name ORDER BY thing_to_sort_by ASC (or DESC)


