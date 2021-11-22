from flask import Flask,request,jsonify
from flask_cors import CORS
import util
import os
app=Flask(__name__)
cors = CORS()
app = Flask(__name__, static_folder='./build', static_url_path='/')
@app.route('/')
def index():
    return app.send_static_file('index.html')
@app.route('/get_location_names',methods=['GET'])
def get_location_names():
    response=jsonify({
        'locations':util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
if __name__== "__main__":
    print("Flask server for home price prediction has staretd")
    app.run()
@app.route('/predict_home_price',methods=['GET',"POST"])
def predict_home_price():
    data=request.get_json()
    total_sqft=float(data['total_sqft'])
    location=data['location']
    bhk=int(data['bhk'])
    bath=int(data['bath'])
    print("data is",data['location'],data['total_sqft'])
    response=jsonify({
        'estimated_price':util.get_estimated_price(location,total_sqft,bhk,bath)
    })
   
    response.headers.add('Access-Control-Allow-Origin', '*')
   
    
    return response
if __name__=='__main__':
    print("Starting Flask Server for Home Price prediction...")
    util.load_saved_artifacts()
    cors.init_app(app)
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))


  