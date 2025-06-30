import express, {Application} from 'express';
import pacienteRouter from './routes/paciente.route';
import AppDataSource from './config/appdatasource';
import medicoRouter from './routes/medico.route';
import authRoutes from './routes/auth.route';
import especialidadRouter from './routes/especialidad.route';
import path from 'path';

const app: Application = express ();

app.use(express.json());
app.use('/api/v1/pacientes', pacienteRouter); 
app.use('/api/v1/medicos', medicoRouter);
app.use('/api/v1/especialidades', especialidadRouter);
app.use('/api', authRoutes);
app.use(express.static(path.join(__dirname, '../public')));

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}
export default app;