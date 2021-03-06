import './SpacingTable.css.proxy.js';
/* src/components/SpacingTable.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	create_component,
	create_slot,
	destroy_component,
	destroy_each,
	detach,
	element,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out,
	update_slot
} from "/web_modules/svelte/internal.js";

import ClassName from "./ClassName.js";
const get_default_slot_changes = dirty => ({ measurement: dirty & /*classes*/ 1 });
const get_default_slot_context = ctx => ({ measurement: /*c*/ ctx[3].measurement });

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (52:5) <ClassName>
function create_default_slot(ctx) {
	let t0;
	let t1_value = /*c*/ ctx[3].name + "";
	let t1;

	return {
		c() {
			t0 = text(".");
			t1 = text(t1_value);
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*classes*/ 1 && t1_value !== (t1_value = /*c*/ ctx[3].name + "")) set_data(t1, t1_value);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
		}
	};
}

// (49:2) {#each classes as c}
function create_each_block(ctx) {
	let tr;
	let td0;
	let classname;
	let t0;
	let td1;
	let t1_value = /*c*/ ctx[3].measurement.value + "";
	let t1;
	let span;
	let t2_value = (/*c*/ ctx[3].measurement.unit ?? "") + "";
	let t2;
	let t3;
	let td2;
	let t4;
	let current;

	classname = new ClassName({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	const default_slot_template = /*$$slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], get_default_slot_context);

	return {
		c() {
			tr = element("tr");
			td0 = element("td");
			create_component(classname.$$.fragment);
			t0 = space();
			td1 = element("td");
			t1 = text(t1_value);
			span = element("span");
			t2 = text(t2_value);
			t3 = space();
			td2 = element("td");
			if (default_slot) default_slot.c();
			t4 = space();
			attr(td0, "class", "svelte-1i1mlvh");
			attr(span, "class", "unit svelte-1i1mlvh");
			attr(td1, "class", "measurement svelte-1i1mlvh");
			attr(td2, "class", "svelte-1i1mlvh");
			attr(tr, "class", "svelte-1i1mlvh");
		},
		m(target, anchor) {
			insert(target, tr, anchor);
			append(tr, td0);
			mount_component(classname, td0, null);
			append(tr, t0);
			append(tr, td1);
			append(td1, t1);
			append(td1, span);
			append(span, t2);
			append(tr, t3);
			append(tr, td2);

			if (default_slot) {
				default_slot.m(td2, null);
			}

			append(tr, t4);
			current = true;
		},
		p(ctx, dirty) {
			const classname_changes = {};

			if (dirty & /*$$scope, classes*/ 5) {
				classname_changes.$$scope = { dirty, ctx };
			}

			classname.$set(classname_changes);
			if ((!current || dirty & /*classes*/ 1) && t1_value !== (t1_value = /*c*/ ctx[3].measurement.value + "")) set_data(t1, t1_value);
			if ((!current || dirty & /*classes*/ 1) && t2_value !== (t2_value = (/*c*/ ctx[3].measurement.unit ?? "") + "")) set_data(t2, t2_value);

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope, classes*/ 5) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, get_default_slot_changes, get_default_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(classname.$$.fragment, local);
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(classname.$$.fragment, local);
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(tr);
			destroy_component(classname);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let table;
	let thead;
	let t5;
	let tbody;
	let current;
	let each_value = /*classes*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			table = element("table");
			thead = element("thead");

			thead.innerHTML = `<tr><td class="svelte-1i1mlvh">Class</td> 
			<td class="measurement svelte-1i1mlvh">Measurement</td> 
			<td class="svelte-1i1mlvh">Sample</td></tr>`;

			t5 = space();
			tbody = element("tbody");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(thead, "class", "svelte-1i1mlvh");
			attr(tbody, "class", "svelte-1i1mlvh");
			attr(table, "class", "svelte-1i1mlvh");
		},
		m(target, anchor) {
			insert(target, table, anchor);
			append(table, thead);
			append(table, t5);
			append(table, tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tbody, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*$$scope, classes*/ 5) {
				each_value = /*classes*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(tbody, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(table);
			destroy_each(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { classes } = $$props;
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("classes" in $$props) $$invalidate(0, classes = $$props.classes);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [classes, $$slots, $$scope];
}

class SpacingTable extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { classes: 0 });
	}
}

export default SpacingTable;