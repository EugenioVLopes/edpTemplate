import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const {
      nomeCompleto,
      email,
      nomeSocial,
      cpf,
      telefone,
      nomeCompletoTitularLegal,
      emailTitularLegal,
      nomeSocialTitularLegal,
      cpfTiularLegal,
      dataNascimentoTitularLegal,
      telefoneTitularLegal,
      servico,
      estado,
      cidade,
      documentos
     } = req.body;

    const newProtocolo = await prisma.protocolo.create({
      data: {
        nomeCompleto,
        email,
        nomeSocial,
        cpf,
        telefone,
        nomeCompletoTitularLegal,
        emailTitularLegal,
        nomeSocialTitularLegal,
        cpfTiularLegal,
        dataNascimentoTitularLegal,
        telefoneTitularLegal,
        servico,
        estado,
        cidade,
        documentos
      },
    });

    return res.status(201).json(newProtocolo);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
