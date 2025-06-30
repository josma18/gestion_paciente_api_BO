import AppDataSource from "../config/appdatasource";
import { Especialidad } from "../entities/especialidad";

const repository = AppDataSource.getRepository(Especialidad);

export const insertarEspecialidad = async (especialidad: Partial<Especialidad>) => {
    await repository.save(especialidad);
};

export const listarEspecialidades = async (): Promise<Especialidad[]> => {
    return await repository.find({ order: { idEspecialidad: "ASC" } });
};

export const listarEspecialidadId = async (id: number): Promise<Especialidad | null> => {
    return await repository.findOne({ where: { idEspecialidad: id } });
};

export const actualizarEspecialidad = async (especialidad: Partial<Especialidad>) => {
    if (!especialidad.idEspecialidad) throw new Error("id de la especialidad es obligatorio");
    await repository.update({ idEspecialidad: especialidad.idEspecialidad }, especialidad);
};

export const eliminarEspecialidad = async (id: number) => {
    await repository.delete({ idEspecialidad: id });
};