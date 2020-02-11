class Api::V1::PrintrecordController < ApplicationController 
    def index
        api_endpoint = "https://jsonplaceholder.typicode.com/posts"
        data = HTTParty.get(api_endpoint)
        if(data.code == 200)
        response = JSON.parse(data.body)
        puts response
        render json: response
    end
end
