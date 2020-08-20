from flask import Flask

app = Flask(__name__)

#the next function in code is the function mapped to the route, kinda weird
@app.route('/',methods=['GET'])
def loadIndex():
    return 'index.html'

if __name__ == '__main__':
    app.run(debug=True)