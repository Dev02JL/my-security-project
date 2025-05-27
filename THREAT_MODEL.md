# Modélisation des menaces (Threat Modeling) – Application Node.js

## 1. Identification des composants
- Utilisateurs
- Serveur Express (back-end)
- API (route `/`)
- Dépendances Node.js

## 2. Actifs sensibles
- Données utilisateurs (si présentes)
- Code source
- Dépendances

## 3. Méthode STRIDE

| Menace                  | Exemple dans ce projet                        | Contre-mesures proposées                         |
|------------------------|-----------------------------------------------|--------------------------------------------------|
| **Spoofing**           | Usurpation d'identité                         | Ajouter une authentification (non implémenté ici) |
| **Tampering**          | Modification des requêtes ou du code          | Valider les entrées, utiliser npm audit           |
| **Repudiation**        | Absence de logs, actions non traçables        | Ajouter des logs d'accès (non implémenté ici)     |
| **Information Disclosure** | Messages d'erreur détaillés              | Masquer les messages d'erreur en prod             |
| **Denial of Service**  | Trop de requêtes, crash du serveur            | Limiter le nombre de requêtes (rate limiting)     |
| **Elevation of Privilege** | Accès à des routes non autorisées        | Protéger les routes sensibles (non implémenté ici)|

## 4. Contre-mesures à intégrer
- Ajouter une authentification pour les routes sensibles
- Valider toutes les entrées utilisateur
- Masquer les messages d'erreur en production
- Mettre en place un système de logs
- Limiter le nombre de requêtes (rate limiting)
- Garder les dépendances à jour et utiliser `npm audit`, Snyk, Semgrep 