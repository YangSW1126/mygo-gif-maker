from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import json

import makeGif

gif = makeGif.makeGif()
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/SendClips', methods=['POST'])
def SendClips():
    if request.is_json:
        data = request.json
        try:
            gif.cutMp4(data)    
        except Exception as e:
            return jsonify({'error': str(e)}), 400

        return jsonify({'status': 200})

    else:
        return jsonify({'error': 'Request must be JSON'}), 400

if __name__ == '__main__':
    CORS(app)
    app.run(debug=False)