import { Request, Response } from "express";
import * as especialidadService from "../services/especialidad.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { Especialidad } from "../entities/especialidad";

export const insertarEspecialidad = async (req: Request, res: Response) => {
    try {
        const especialidad: Partial<Especialidad> = req.body;
        await especialidadService.insertarEspecialidad(especialidad);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarEspecialidades = async (_: Request, res: Response) => {
    try {
        const especialidades = await especialidadService.listarEspecialidades();
        res.json(BaseResponse.success(especialidades));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarEspecialidadId = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const especialidad = await especialidadService.listarEspecialidadId(id);
        res.json(BaseResponse.success(especialidad));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarEspecialidad = async (req: Request, res: Response) => {
    try {
        req.body.idEspecialidad = Number(req.params.id);
        await especialidadService.actualizarEspecialidad(req.body);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const eliminarEspecialidad = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await especialidadService.eliminarEspecialidad(id);
        res.json(BaseResponse.success(null, MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};