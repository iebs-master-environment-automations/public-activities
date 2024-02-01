from flask import Flask, render_template
from flask_mysqldb import MySQL

import os

app = Flask(__name__)

# Configuración de la base de datos
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER', 'root')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')

mysql = MySQL(app)

@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM juegos")
    juegos = cur.fetchall()
    cur.close()

    return render_template('index.html', juegos=juegos)


@app.route('/health-check')
def health_check():
    return 'OK'


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
