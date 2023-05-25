import React from 'react';
import learning from "../../assets/79960-learning.json";
import Lottie from "lottie-react";
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className="hero">
      <Helmet>
        <title>Blogs | Toyfinity</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <Lottie animationData={learning} loop={true} />
        <div>
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              What are an access token and a refresh token?
              How do they work and where should we store them on the client-side?
            </div>
            <div className="collapse-content">
              <p>#An access token is a credential issued to a client application after a user successfully authenticates. It grants the application authorization to access specific resources or perform actions on behalf of the user. It has a limited lifespan and is used to identify and authorize the user in API requests.
                <br />
                #A refresh token is also issued by the authentication server and has a longer lifespan. It is used to obtain a new access token without the need for the user to re-authenticate.
                <br />

                ----------
                <br />
                # Access Token Flow:
                <br />
                Client sends a request with user credentials to the authentication server.
                Authentication server verifies the credentials and generates an access token.
                The access token is returned to the client.
                The client includes the access token in the authorization header of API requests.
                The server verifies the access token for validity and authorization before processing the request.
                <br />
                #Refresh Token Flow:
                <br />
                When the access token expires, the client sends a request to the authentication server with the refresh token.
                The authentication server verifies the refresh token.
                If the refresh token is valid, a new access token is generated and returned to the client.
                The client updates the expired access token with the new one and continues making API requests.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content">
              <p>
                #SQL databases have a structured data model with predefined schemas, while NoSQL databases have a flexible data model. SQL databases are vertically scalable, use SQL as a query language, have a rigid schema, and are suitable for complex queries and structured data. NoSQL databases are horizontally scalable, use various query languages, offer schema flexibility, and are ideal for handling large volumes of unstructured or semi-structured data.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              What is express js? What is Nest JS ?
            </div>
            <div className="collapse-content">
              <p>#Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the process of building web applications and APIs by providing routing capabilities and handling HTTP requests and responses.
                <br />
                #NestJS is a progressive and versatile framework for building server-side applications with Node.js. It emphasizes modularity, scalability, and uses TypeScript for enhanced development experience.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              What is MongoDB aggregate and how does it work?
            </div>
            <div className="collapse-content">
              <p># In MongoDB, the aggregate function is used to perform advanced data aggregation operations on collections. It uses a pipeline of stages to process and transform data, apply filters, perform calculations, and generate aggregated results. The stages are applied sequentially, with the output of one stage becoming the input for the next stage.
                <br />
                The aggregate function takes an array of stages as its argument. Each stage represents a specific operation in the data pipeline, where the output of one stage serves as the input for the next stage.
              </p>
            </div>
          </div>

        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Blogs;