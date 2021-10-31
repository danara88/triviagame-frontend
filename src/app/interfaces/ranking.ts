import { Ranking } from '../models/ranking.model';

/**
 * This is the response to get top rankings
 */
export interface GetTopRankingResponse {
    total: Number,
    rankings: Ranking[],
}