## Table of Contents

*1. Configuration*
   
*2. Controllers*
   
 - authcontroller: Manages user authentication process including registration, login and logout.

 - DebtController: Handles operations related to use debts.
   
*3. Middleware*
   
- AuthMiddleware: Ensures that routes are protected and only accessible to authenticated users.
  
*4. Models*
  
 - User Model: Defines the structure and behavior of user data within the application, including authentication details.
   
 - Debt Model: Represents the debt data associated with users, including amount, due dates, and payment status.
   
*5. Routes*
   
 - Auth Routes: Defines the routes related to user authentication.
   
 - Debt Routes: Contains routes for managing debts.
   
*6. Environment Variables*: Details the environment variables needed for the application to run, such as database connection strings and API keys.
   
*7. Server Setup*:  Instructions for setting up and running the server, including installing dependencies and starting the application.
   
*8. Authorization and Token Usage*: Explains how authorization is managed within the application, including the use of tokens for securing API endpoints.
    
*9. API Endpoints*: Lists all available API endpoints, their purposes, and how to use them. This includes endpoints for authentication and debt management.

## Used Technologies

cd finance-backend

node server.js

## Getting Started

cd finance-backend

node server.js




## Tablo Yapısı

*1. Configuration*
   
*2. Controllers*
   
 - authcontroller: Kullanıcı kimlik doğrulama sürecini yönetir.

 - DebtController: Kullanıcı borçlarıyla ilgili işlemleri yönetir. (yeni borç oluşturma, borç bilgileri alma vb.)
   
*3. Middleware*
   
- AuthMiddleware: Rotaların korunduğundan ve yalnızca kimliği doğrulanmış kullanıcılar tarafından erişildiğinden emin olur.
  
*4. Models*
  
 - User Model: Uygulama içindeki kullanıcı verilerinin yapısını ve davranışını tanımlar.
   
 - Debt Model: Kullanıcılara ait borç verilerini temsil eder.
   
*5. Routes*
   
 - Auth Routes: Kayıt ve giriş uç noktaları.
      
 - Debt Routes: Borç yönetimi rotaları.
   
*6. Environment Variables*
   
*7. Server Setup*
   
*8. Authorization and Token Usage*
    
*9. API Endpoints*

## Kullanılan Teknolojiler

Node.js

Express

sqlite3

## Projeye Giriş 

cd finance-backend

node server.js

