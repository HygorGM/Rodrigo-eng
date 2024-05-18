import type { IService } from "~/types"

export default function () {
    const services: IService[] = [
        {
            "title": "Residencial",
            "description": "Laudos Residenciais",
            "image": "services/residencial.jpg",
            "url": ""
        },
        {
            "title": "Predial",
            "description": "Laudos Prediais",
            "image": "services/predio.webp",
            "url": ""
        },
        {
            "title": "Obra Inacabada",
            "description": "Laudos de Obra Inacabada",
            "image": "services/incompleto.webp",
            "url": ""
        },
        {
            "title": "Comercial",
            "description": "Laudos Comerciais",
            "image": "services/comercial.webp",
            "url": ""
        },
        {
            "title": "Parque Aquático",
            "description": "Laudos de Parque Aquático",
            "image": "services/parque.jfif",
            "url": ""
        },
        {
            "title": "Assistência Judicial",
            "description": "Laudos para Assistência Judicial",
            "image": "services/juridico.jfif",
            "url": ""
        },
        {
            "title": "Judicial",
            "description": "Laudos Judiciais",
            "image": "services/judicial.jfif",
            "url": ""
        },
        {
            "title": "Recebimento de Imóvel",
            "description": "Laudos de Recebimento de Imóvel",
            "image": "services/recebimento.jpeg",
            "url": ""
        }
    ]
    return services
}