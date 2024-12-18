from flask import Blueprint , render_template

views = Blueprint('views',__name__)

@views.route("/")
def home():
    return render_template("index.html")

@views.route("/index.html")
def index():
    return render_template("index.html")

@views.route("/reference.html")
def refer():
    return render_template("reference.html")

@views.route("/our_approach.html")
def approach():
    return render_template("our_approach.html")

@views.route("/testing.html")
def test():
    return render_template("testing.html")