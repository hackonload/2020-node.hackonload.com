const FAQs = require("./../data/faqs");
const team = require("./../data/team");
const schedule = require("./../data/schedule");

module.exports.getData = (title, description, url, links) => {
	return {
		title: title,
		meta_description: description,
		page_url: url,
		FAQs: FAQs,
		links: links,
		schedule: schedule,
		team: team,
		production: (process.env.NODE_ENV === "production")
	};
};
