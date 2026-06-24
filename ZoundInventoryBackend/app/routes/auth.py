from flask import Blueprint, request, jsonify
from app.database.database import db
from app.models.usuario import Usuario


auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/registro', methods=['POST'])
def registro():
    data = request.json
    nuevo_usuario = Usuario(
        primer_nombre=data['primer_nombre'],
        primer_apellido=data['primer_apellido'],
        tipo_documento=data['tipo_documento'],
        documento=data['documento'],
        correo=data['correo'], 
        password=data['password'],
        id_rol=data['id_rol']
    )
    db.session.add(nuevo_usuario)
    db.session.commit()
    
    return jsonify({"mensaje": "Usuario creado exitosamente"}), 201


@auth_bp.route('/login', methods=['POST'])
def login():

    data = request.json
    usuario = Usuario.query.filter_by(documento=data['documento'], password=data['password']).first()
    
    if usuario:
        return jsonify({"mensaje": "Login exitoso", "usuario": usuario.primer_nombre}), 200
    else:
        return jsonify({"mensaje": "Credenciales inválidas"}), 401