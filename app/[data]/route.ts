import { promises as fs } from 'fs';

type Params = {
	params: {
		data: string;
	};
};

export async function GET(req: Request, { params }: Params) {
	const dataName = params.data;

	const path = process.cwd() + '/app/datasource/' + dataName + '.json';

	try {
		const file = await fs.readFile(path, 'utf8');

		const data = JSON.parse(file);

		return Response.json({
			data: data
		});
	} catch (err) {
		return Response.json({
			error: 'File not found'
		});
	}
}
