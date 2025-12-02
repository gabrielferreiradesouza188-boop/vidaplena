import { GoogleGenAI } from "@google/genai";
import { PageView } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string, 
  context: PageView, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash';
    
    // Determine context string for the prompt
    let pageContext = 'PÁGINA INICIAL';
    if (context === PageView.COMMUNITY) pageContext = 'PREVENÇÃO E COMUNIDADE';
    if (context === PageView.FAMILY) pageContext = 'APOIO AOS FAMILIARES';

    let systemInstruction = `
      Você é um assistente virtual especializado (IA de apoio) em uma plataforma de prevenção ao alcoolismo e apoio familiar chamada "Vida Plena".
      Baseie suas respostas em evidências científicas, psiquiatria e psicologia, mas com uma linguagem acessível e acolhedora.
      
      O usuário está atualmente na página: ${pageContext}.
      
      Diretrizes Específicas:
      - Se o contexto for PREVENÇÃO E COMUNIDADE: Foque em redução de danos, identificação de sinais de alerta, busca por ajuda profissional, reinserção social e suporte entre pares.
      - Se o contexto for APOIO AOS FAMILIARES: Você é um conselheiro para a família. Foque em como lidar com a codependência, a importância do autocuidado do familiar, como estabelecer limites saudáveis e como oferecer ajuda sem tentar controlar o outro.
      
      Tom de voz:
      - Seja empático, livre de julgamentos e encorajador.
      - Não dê diagnósticos médicos definitivos. Sugira sempre a busca por profissionais (psiquiatras, psicólogos) e grupos como AA ou Al-Anon.
      - Seja conciso (máximo de 3 parágrafos curtos).
    `;

    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Estou tendo dificuldades para conectar ao serviço de inteligência. Por favor, tente novamente mais tarde.";
  }
};