from flask import Blueprint, jsonify, session, request
from .models import User, TreeGroup, db
from .forms import LoginForm
from .forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

tree_routes = Blueprint('trees', __name__)


# GET /trees/ - get all trees - mainly for loading all of them on the map, need that data
@tree_routes.route('/')
def trees():
    trees = TreeGroup.query.all()
    return {'treeGroups': [tree.to_dict() for tree in trees]}

# POST /trees/:id - create a new tree
@tree_routes.route('/', methods=["POST"])
@login_required
def new_set_of_trees():

    #TODO: add a tree form to the forms folder to validate new tree group
    # form = TreeForm()

    # form['csrf_token'].data = request.cookies['csrf_token']

    if request.json["userId"] != current_user.id:
        return {'errors': ["user: You don't own this account!"]}, 405

    # if form.validate_on_submit():

    data = request.json

    new_tree_group = TreeGroup(
        userId=data["userId"],
        description=data["description"],
        address=data["address"],
        lat=data["lat"],
        lng=data["lng"],
        numOfTrees=data["numOfTrees"]
    )

    db.session.add(new_tree_group)
    db.session.commit()
    return new_tree_group.to_dict()

    # errz = validation_errors_to_error_messages(form.errors)
    # return {'errors': errz}, 400


# DELETE /trees/:id
@tree_routes.route('/<int:treeId>/', methods=["DELETE"])
@login_required
def delete_notebook(treeId):

    tree_to_delete = TreeGroup.query.get(treeId)

    if tree_to_delete.userId == current_user.id:
        db.session.delete(tree_to_delete)
        db.session.commit()
        return jsonify(treeId)
    else:
        return {'errors': ["user: You are unauthorized"]}, 405
