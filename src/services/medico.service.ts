import AppDataSource from "../config/appdatasource";
import { Medico } from "../entities/medico";

const repository = AppDataSource.getRepository(Medico);

export const insertarMedico = async (medico: Partial<Medico>) => {
    await repository.save(medico);
};

export const listarMedicos = async (): Promise<Medico[]> => {
    return await repository.find({
        order: {
            idMedico: "ASC"
        },
        relations: ["usuario", "especialidad"] // si estás usando relaciones
    });
};

export const listarMedicoId = async (id: number): Promise<Medico | null> => {
    return await repository.findOne({
        where: { idMedico: id },
        relations: ["usuario", "especialidad"]
    });
};

export const actualizarMedico = async (medico: Partial<Medico>) => {
    if (!medico.idMedico) throw new Error("id del médico es obligatorio");
    await repository.update({ idMedico: medico.idMedico }, medico);
};

export const eliminarMedico = async (id: number) => {
    await repository.delete({ idMedico: id });
};