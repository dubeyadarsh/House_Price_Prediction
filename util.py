import pickle
import json
import numpy as np
__data_columns=None
__location=None
__model=None
def get_data_columns():
    return __data_columns
def get_location_names():
    print("fetching the location")
    if __location is None:
        load_saved_artifacts()
    return __location
def get_estimated_price(location,sqft,bhk,bath):
    try:
        if __data_columns is None:
            load_saved_artifacts()
        loc_index=__data_columns.index(location.lower())
    except:
        loc_index=-1
    x=np.zeros(len(__data_columns))
    x[0]=sqft
    x[1]=bath
    x[2]=bhk
    if loc_index>=0:
        x[loc_index]=1
    return round(__model.predict([x])[0],2)




def load_saved_artifacts():
    print("loading saved artifacts....")
    global __data_columns
    global __location
    with open("./artifacts/columns.json","r")as f:
        __data_columns=json.load(f)['data_colums']
        __location=__data_columns[3:]
    global __model
    if __model is None:
        with open("./artifacts/banglore_home_price_model.pickle","rb") as f:
            __model=pickle.load(f)
    print("Loading saved artifacts has been done.....")\

if __name__=='__main__':
    load_saved_artifacts()
    print(get_location_names())
    print(get_estimated_price('dommasandra',1000, 3, 3))

