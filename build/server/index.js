import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), streamTimeout + 1e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/components/NavBar/Navbar.tsx
var NAV_ITEMS = [
	{
		id: "hero-route",
		label: "Home",
		to: "/hero"
	},
	{
		id: "archive-route",
		label: "Archives",
		to: "/archive"
	},
	{
		id: "upload-route",
		label: "Upload",
		to: "/upload"
	},
	{
		id: "timer-route",
		label: "Lock In",
		to: "/timer"
	},
	{
		id: "accesibility-route",
		label: "Settings",
		to: "/accesibility"
	}
];
function Navbar({ mushroomIconSrc = "/mini-mush-3.png", mushroomCount = 0 }) {
	return /* @__PURE__ */ jsxs("nav", {
		className: "mushroom-nav",
		children: [NAV_ITEMS.map((item) => /* @__PURE__ */ jsx(NavLink, {
			to: item.to,
			className: "nav-pill",
			children: item.label
		}, item.label)), /* @__PURE__ */ jsxs("div", {
			className: "nav-pill mushroom-pill",
			children: [/* @__PURE__ */ jsx("img", {
				src: mushroomIconSrc,
				alt: "mushroom",
				className: "mush-icon"
			}), /* @__PURE__ */ jsx("span", { children: String(mushroomCount).padStart(2, "0") })]
		})]
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({ default: () => root_default });
var root_default = UNSAFE_withComponentProps(function Root() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [dark, setDark] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("theme") === "dark") setDark(true);
	}, []);
	useEffect(() => {
		document.body.classList.toggle("dark", dark);
		localStorage.setItem("theme", dark ? "dark" : "light");
	}, [dark]);
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx("title", { children: "Mush Root" }),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsxs("button", {
				className: `hamburger-btn${menuOpen ? " is-open" : ""}`,
				onClick: () => setMenuOpen((o) => !o),
				"aria-label": "Toggle menu",
				children: [
					/* @__PURE__ */ jsx("span", {}),
					/* @__PURE__ */ jsx("span", {}),
					/* @__PURE__ */ jsx("span", {})
				]
			}),
			menuOpen && /* @__PURE__ */ jsx("div", {
				className: "sidebar-overlay",
				onClick: () => setMenuOpen(false)
			}),
			/* @__PURE__ */ jsxs("div", {
				className: `global-sidebar${menuOpen ? " is-open" : ""}`,
				children: [/* @__PURE__ */ jsx("img", {
					src: "/hero-sidebar.png",
					alt: "",
					className: "global-sidebar-bg",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsxs("div", {
					className: "sidebar-scroll",
					children: [
						/* @__PURE__ */ jsx(Navbar, {
							mushroomIconSrc: "/mini-mush-3.png",
							mushroomCount: 0
						}),
						/* @__PURE__ */ jsx("img", {
							src: "/title-logo.png",
							alt: "Mush Root",
							className: "global-sidebar-logo"
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setDark((d) => !d),
							className: "theme-toggle",
							children: dark ? "☀️ Light" : "🌙 Dark"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "global-content",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
});
//#endregion
//#region app/routes/hero/hero.tsx
var hero_exports = /* @__PURE__ */ __exportAll({ default: () => hero_default });
function Hero() {
	return /* @__PURE__ */ jsxs("div", {
		className: "hero",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "clouds",
				children: [
					/* @__PURE__ */ jsx("img", {
						className: "cloud cat-cloud-1",
						src: "/cat-cloud-1.png",
						alt: "cute cat cloud"
					}),
					/* @__PURE__ */ jsx("img", {
						className: "cloud cat-cloud-2",
						src: "/cat-cloud-2.png",
						alt: "cute cat cloud"
					}),
					/* @__PURE__ */ jsx("img", {
						className: "cloud cat-cloud-3",
						src: "/cat-cloud-3.png",
						alt: "cute cat cloud"
					}),
					/* @__PURE__ */ jsx("img", {
						className: "cloud gen-cloud-1",
						src: "/general-cloud-1.png",
						alt: "another normal cloud"
					}),
					/* @__PURE__ */ jsx("img", {
						className: "cloud gen-cloud-2",
						src: "/general-cloud-2.png",
						alt: "normal cloud"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "hills",
				children: [
					/* @__PURE__ */ jsx("div", { className: "back-hill" }),
					/* @__PURE__ */ jsx("div", { className: "mid-hill" }),
					/* @__PURE__ */ jsx("div", { className: "front-hill" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mushrooms",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "c-1",
						children: [
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-1",
								src: "/mini-mush-1.png",
								alt: "a tiny mushroom"
							}),
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-2",
								src: "/mini-mush-2.png",
								alt: "a tiny mushroom"
							}),
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-3",
								src: "/mini-mush-3.png",
								alt: "a tiny mushroom"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "c-2",
						children: [
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-1",
								src: "/mini-mush-4.png",
								alt: "a tiny mushroom"
							}),
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-2",
								src: "/mini-mush-5.png",
								alt: "a tiny mushroom"
							}),
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-3",
								src: "/mini-mush-6.png",
								alt: "a tiny mushroom"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "c-3",
						children: [
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-1",
								src: "/mini-mush-4.png",
								alt: "a tiny mushroom"
							}),
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-2",
								src: "/mini-mush-1.png",
								alt: "a tiny mushroom"
							}),
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-3",
								src: "/mini-mush-3.png",
								alt: "a tiny mushroom"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "c-4",
						children: [/* @__PURE__ */ jsx("img", {
							className: "mushroom mush-1",
							src: "/mini-mush-5.png",
							alt: "a tiny mushroom"
						}), /* @__PURE__ */ jsx("img", {
							className: "mushroom mush-2",
							src: "/mini-mush-2.png",
							alt: "a tiny mushroom"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "c-5",
						children: [/* @__PURE__ */ jsx("img", {
							className: "mushroom mush-2",
							src: "/mini-mush-6.png",
							alt: "a tiny mushroom"
						}), /* @__PURE__ */ jsx("img", {
							className: "mushroom mush-3",
							src: "/mini-mush-1.png",
							alt: "a tiny mushroom"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "c-6",
						children: [/* @__PURE__ */ jsx("img", {
							className: "mushroom mush-1",
							src: "/mini-mush-5.png",
							alt: "a tiny mushroom"
						}), /* @__PURE__ */ jsx("img", {
							className: "mushroom mush-3",
							src: "/mini-mush-3.png",
							alt: "a tiny mushroom"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "c-7",
						children: [/* @__PURE__ */ jsx("img", {
							className: "mushroom mush-2",
							src: "/mini-mush-2.png",
							alt: "a tiny mushroom"
						}), /* @__PURE__ */ jsx("img", {
							className: "mushroom mush-3",
							src: "/mini-mush-4.png",
							alt: "a tiny mushroom"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "c-8",
						children: [
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-1",
								src: "/mini-mush-3.png",
								alt: "a tiny mushroom"
							}),
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-2",
								src: "/mini-mush-1.png",
								alt: "a tiny mushroom"
							}),
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-3",
								src: "/mini-mush-4.png",
								alt: "a tiny mushroom"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "c-9",
						children: [
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-1",
								src: "/mini-mush-4.png",
								alt: "a tiny mushroom"
							}),
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-2",
								src: "/mini-mush-6.png",
								alt: "a tiny mushroom"
							}),
							/* @__PURE__ */ jsx("img", {
								className: "mushroom mush-3",
								src: "/mini-mush-5.png",
								alt: "a tiny mushroom"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "c-10",
						children: /* @__PURE__ */ jsx("img", {
							className: "mushroom mush-1",
							src: "/mini-mush-1.png",
							alt: "a tiny mushroom"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "c-11",
						children: /* @__PURE__ */ jsx("img", {
							className: "mushroom mush-1",
							src: "/mini-mush-5.png",
							alt: "a tiny mushroom"
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("img", {
				className: "logo",
				src: "/title-logo.png",
				alt: "mush root text on top of a log"
			})
		]
	});
}
var hero_default = UNSAFE_withComponentProps(Hero);
//#endregion
//#region app/routes/ac/accesibility.tsx
var accesibility_exports = /* @__PURE__ */ __exportAll({ default: () => accesibility_default });
function accesibility() {
	return /* @__PURE__ */ jsxs("main", {
		className: "bg-[#FAF4E9] h-screen flex flex-col items-center",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex flex-col bg-[#F3CBC5] min-h-30 min-w-300 mt-5 text-center justify-center rounded-xl",
			children: /* @__PURE__ */ jsx("h1", {
				className: "text-[#FAF4E9] font-margarine text-5xl",
				children: " Accesibility "
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-2 gap-5 mt-10 font-margarine text-[#FAF4E9] text-2xl ",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "bg-[#AABDA0] w-150 h-40 mb-10 rounded-xl flex items-center justify-center duration-300",
					children: " Dark Mode"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "bg-[#AABDA0] mb-10 rounded-xl flex items-center justify-center",
					children: " Subway surfers"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "bg-[#AABDA0] h-40 mb-10 rounded-xl flex items-center justify-center",
					children: " Line Following"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "bg-[#AABDA0] mb-10 rounded-xl flex items-center justify-center",
					children: " Animations on/off"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "bg-[#AABDA0] h-40 mb-10 rounded-xl flex items-center justify-center",
					children: " Black and white"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "bg-[#AABDA0] mb-10 rounded-xl flex items-center justify-center",
					children: " Enable games"
				})
			]
		})]
	});
}
var accesibility_default = UNSAFE_withComponentProps(accesibility);
//#endregion
//#region app/components/testCard.tsx
function TestCard({ test }) {
	const thumbnailSrc = test.thumbnail ? `data:image/jpeg;base64,${test.thumbnail}` : null;
	function openPdf() {
		if (!test.data) return;
		const byteChars = atob(test.data);
		const byteArray = new Uint8Array(byteChars.length);
		for (let i = 0; i < byteChars.length; i++) byteArray[i] = byteChars.charCodeAt(i);
		const blob = new Blob([byteArray], { type: "application/pdf" });
		const url = URL.createObjectURL(blob);
		window.open(url, "_blank");
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#BECCC0] rounded-xl overflow-hidden cursor-pointer",
		onClick: openPdf,
		children: [/* @__PURE__ */ jsx("div", {
			className: "w-full h-32 bg-[#e8d5a0]",
			children: thumbnailSrc ? /* @__PURE__ */ jsx("img", {
				src: thumbnailSrc,
				alt: test.title,
				className: "w-full h-full object-cover"
			}) : /* @__PURE__ */ jsx("div", {
				className: "w-full h-full flex items-center justify-center text-sm text-gray-500",
				children: "No image"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-2",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-2xl text-[#435245] px-2 pb-2",
					children: test.title
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-1 px-2 pb-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "px-2 py-1 bg-[#fdabab] rounded-xl text-[#435245]",
							children: test.courseCode
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-2 py-1 bg-[#fdabab] rounded-xl text-[#435245]",
							children: test.teacherName
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-2 py-1 bg-[#fdabab] rounded-xl text-[#435245]",
							children: test.year
						})
					]
				}),
				test.tags?.length > 0 && /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2 px-3 pb-3",
					children: test.tags.map((g) => /* @__PURE__ */ jsx("div", {
						className: "px-2 py-1 bg-[#f3cbc5] rounded-xl text-sm text-[#435245]",
						children: g
					}, g))
				})
			]
		})]
	});
}
//#endregion
//#region app/components/testFilter.tsx
function TestFilter({ courses, selectedCourse, onCourseChange, searchQuery, onSearchChange, sortOrder, onSortChange }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-3 p-4 flex-wrap",
		children: [
			/* @__PURE__ */ jsx("input", {
				type: "text",
				placeholder: "Search by title or teacher…",
				value: searchQuery,
				onChange: (e) => onSearchChange(e.target.value),
				className: "bg-[#BECCC0] rounded-lg text-[#435245] px-3 py-2 flex-1"
			}),
			/* @__PURE__ */ jsxs("select", {
				value: selectedCourse,
				onChange: (e) => onCourseChange(e.target.value),
				className: "bg-[#BECCC0] rounded-lg text-[#435245] px-3 py-2",
				children: [/* @__PURE__ */ jsx("option", {
					value: "",
					children: "All courses"
				}), courses.map((c) => /* @__PURE__ */ jsx("option", {
					value: c,
					children: c
				}, c))]
			}),
			/* @__PURE__ */ jsxs("select", {
				value: sortOrder,
				onChange: (e) => onSortChange(e.target.value),
				className: "bg-[#BECCC0] rounded-lg text-[#435245] px-3 py-2",
				children: [/* @__PURE__ */ jsx("option", {
					value: "newest",
					children: "Newest first"
				}), /* @__PURE__ */ jsx("option", {
					value: "oldest",
					children: "Oldest first"
				})]
			})
		]
	});
}
//#endregion
//#region app/routes/archive/archive.tsx
var archive_exports = /* @__PURE__ */ __exportAll({ default: () => archive_default });
var BACKEND_URL$1 = "http://localhost:8080";
function Archive() {
	const [tests, setTests] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedCourse, setSelectedCourse] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOrder, setSortOrder] = useState("newest");
	useEffect(() => {
		fetch(`${BACKEND_URL$1}/api/tests`).then((res) => {
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			return res.json();
		}).then((data) => setTests(data)).catch((err) => setError(err.message)).finally(() => setLoading(false));
	}, []);
	const courses = [...new Set(tests.map((t) => t.courseCode))].sort();
	const filteredTests = tests.filter((test) => {
		const matchesCourse = !selectedCourse || test.courseCode === selectedCourse;
		const q = searchQuery.toLowerCase();
		const matchesSearch = !q || test.title.toLowerCase().includes(q) || test.teacherName.toLowerCase().includes(q);
		return matchesCourse && matchesSearch;
	}).sort((a, b) => sortOrder === "newest" ? b.year - a.year : a.year - b.year);
	if (loading) return /* @__PURE__ */ jsx("div", {
		className: "global-content p-8",
		children: "Loading..."
	});
	if (error) return /* @__PURE__ */ jsxs("div", {
		className: "global-content p-8",
		children: ["Error: ", error]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "",
		children: [/* @__PURE__ */ jsx(TestFilter, {
			courses,
			selectedCourse,
			onCourseChange: setSelectedCourse,
			searchQuery,
			onSearchChange: setSearchQuery,
			sortOrder,
			onSortChange: setSortOrder
		}), filteredTests.length === 0 ? /* @__PURE__ */ jsx("div", {
			className: "p-8 text-center text-[#AABDA0]",
			children: "No tests found"
		}) : /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4",
			children: filteredTests.map((test) => /* @__PURE__ */ jsx(TestCard, { test }, test.id))
		})]
	});
}
var archive_default = UNSAFE_withComponentProps(Archive);
//#endregion
//#region app/routes/merge/MergeGame.tsx
function MergeGame() {
	const [grid, setGrid] = useState(Array(12).fill(null));
	const createMushroom = (level = 1) => ({
		type: "mushroom",
		level,
		img: `/merge-${level}.png`
	});
	const spawnMushroom = () => {
		setGrid((prev) => {
			const newGrid = [...prev];
			const emptyIndex = newGrid.findIndex((c) => c === null);
			if (emptyIndex === -1) return prev;
			newGrid[emptyIndex] = createMushroom(1);
			return newGrid;
		});
	};
	const handleDrop = (fromIndex, toIndex) => {
		if (fromIndex === toIndex) return;
		setGrid((prev) => {
			const newGrid = [...prev];
			const source = newGrid[fromIndex];
			const target = newGrid[toIndex];
			if (!source) return prev;
			if (!target) {
				newGrid[toIndex] = source;
				newGrid[fromIndex] = null;
				return newGrid;
			}
			if (source.type === target.type && source.level === target.level) {
				newGrid[toIndex] = createMushroom(source.level + 1);
				newGrid[fromIndex] = null;
				return newGrid;
			}
			[newGrid[fromIndex], newGrid[toIndex]] = [newGrid[toIndex], newGrid[fromIndex]];
			return newGrid;
		});
	};
	return /* @__PURE__ */ jsx(DndProvider, {
		backend: HTML5Backend,
		children: /* @__PURE__ */ jsxs("div", {
			className: "merge",
			children: [
				/* @__PURE__ */ jsx("button", {
					className: "spawn-btn",
					onClick: spawnMushroom,
					children: "Spawn Mushroom"
				}),
				/* @__PURE__ */ jsx("h1", { children: "Mush Merge" }),
				/* @__PURE__ */ jsx("div", {
					className: "grid-box",
					children: grid.map((cell, i) => /* @__PURE__ */ jsx(Zone, {
						index: i,
						cell,
						handleDrop
					}, i))
				})
			]
		})
	});
}
function Zone({ cell, index, handleDrop }) {
	const [, drop] = useDrop(() => ({
		accept: "MUSHROOM",
		drop: (dragged) => {
			handleDrop(dragged.fromIndex, index);
		}
	}));
	return /* @__PURE__ */ jsx("div", {
		ref: drop,
		className: "grid",
		children: cell && /* @__PURE__ */ jsx(Item, {
			item: cell,
			index
		})
	});
}
function Item({ item, index }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "MUSHROOM",
		item: { fromIndex: index },
		collect: (monitor) => ({ isDragging: monitor.isDragging() })
	}));
	return /* @__PURE__ */ jsx("img", {
		ref: drag,
		src: item.img,
		alt: "mushroom",
		className: "merge-item"
	});
}
//#endregion
//#region app/routes/merge/merge.tsx
var merge_exports = /* @__PURE__ */ __exportAll({ default: () => merge_default });
function Merge() {
	return /* @__PURE__ */ jsxs(DndProvider, {
		backend: HTML5Backend,
		children: [/* @__PURE__ */ jsx(MergeGame, {}), /* @__PURE__ */ jsx(Navbar, {})]
	});
}
var merge_default = UNSAFE_withComponentProps(Merge);
//#endregion
//#region app/routes/timer/timer.tsx
var timer_exports = /* @__PURE__ */ __exportAll({ default: () => timer_default });
function Timer() {
	const [workMinutes, setWorkMinutes] = useState("25");
	const [breakMinutes, setBreakMinutes] = useState("5");
	const [timeLeft, setTimeLeft] = useState(0);
	const [currentPhase, setCurrentPhase] = useState("work");
	const [isRunning, setIsRunning] = useState(false);
	const [started, setStarted] = useState(false);
	useEffect(() => {
		if (!isRunning) return;
		const interval = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) if (currentPhase === "work") {
					setCurrentPhase("break");
					return parseInt(breakMinutes) * 60;
				} else {
					setCurrentPhase("work");
					return parseInt(workMinutes) * 60;
				}
				return prev - 1;
			});
		}, 1e3);
		return () => clearInterval(interval);
	}, [
		isRunning,
		currentPhase,
		workMinutes,
		breakMinutes
	]);
	const startTimer = () => {
		const work = parseInt(workMinutes) || 0;
		if (work <= 0) return;
		setCurrentPhase("work");
		setTimeLeft(work * 60);
		setStarted(true);
		setIsRunning(true);
	};
	const toggleTimer = () => {
		if (!started) startTimer();
		else setIsRunning((prev) => !prev);
	};
	const resetTimer = () => {
		setIsRunning(false);
		setStarted(false);
		setCurrentPhase("work");
		setTimeLeft(0);
		setWorkMinutes("25");
		setBreakMinutes("5");
	};
	const formatTime = (seconds) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "pageLayout",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "title",
				children: "Pomodoro Timer"
			}),
			!started && /* @__PURE__ */ jsxs("div", {
				className: "inputs",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "inputCard",
					children: [/* @__PURE__ */ jsx("label", { children: "Work Minutes" }), /* @__PURE__ */ jsx("input", {
						className: "timeInput",
						type: "number",
						value: workMinutes,
						onChange: (e) => setWorkMinutes(e.target.value)
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "inputCard",
					children: [/* @__PURE__ */ jsx("label", { children: "Break Minutes" }), /* @__PURE__ */ jsx("input", {
						className: "timeInput",
						type: "number",
						value: breakMinutes,
						onChange: (e) => setBreakMinutes(e.target.value)
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "timerContainer",
				children: [/* @__PURE__ */ jsx("h2", { children: currentPhase === "work" ? "Work Time" : "Break Time" }), /* @__PURE__ */ jsx("div", {
					className: "timerDisplay",
					children: formatTime(timeLeft)
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "buttons",
				children: [/* @__PURE__ */ jsx("button", {
					className: "startButton",
					onClick: toggleTimer,
					children: !started ? "Start" : isRunning ? "Pause" : "Resume"
				}), /* @__PURE__ */ jsx("button", {
					className: "resetButton",
					onClick: resetTimer,
					children: "Reset"
				})]
			})
		]
	});
}
var timer_default = UNSAFE_withComponentProps(Timer);
//#endregion
//#region app/routes/archive/upload.tsx
var upload_exports = /* @__PURE__ */ __exportAll({ default: () => upload_default });
var BACKEND_URL = "http://localhost:8080";
var upload_default = UNSAFE_withComponentProps(function UploadPage({}) {
	const [thumbnail, setThumbnail] = useState(null);
	const [thumbnailFile, setThumbnailFile] = useState(null);
	const [pdfFile, setPdfFile] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [tagsInput, setTagsInput] = useState("");
	const [form, setForm] = useState({
		title: "",
		courseCode: "",
		year: "",
		teacherName: ""
	});
	const thumbnailInputRef = useRef(null);
	const pdfInputRef = useRef(null);
	function handleChange(e) {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	}
	const handleThumbnailUpload = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			setThumbnail(URL.createObjectURL(file));
			setThumbnailFile(file);
		}
	};
	async function handleSubmit() {
		if (!pdfFile) {
			setError("Please attach a PDF.");
			return;
		}
		if (!form.title || !form.courseCode || !form.year || !form.teacherName) {
			setError("Please fill in all fields.");
			return;
		}
		const fd = new FormData();
		fd.append("title", form.title);
		fd.append("courseCode", form.courseCode);
		fd.append("year", form.year);
		fd.append("teacherName", form.teacherName);
		fd.append("data", pdfFile);
		tagsInput.split("\n").map((t) => t.trim()).filter((t) => t.length > 0).forEach((tag) => fd.append("tags", tag));
		if (thumbnailFile) fd.append("thumbnail", thumbnailFile);
		else {
			const defaultBlob = await (await fetch("/thumbnailFiller.png")).blob();
			fd.append("thumbnail", defaultBlob, "thumbnailFiller.png");
		}
		setLoading(true);
		setError(null);
		try {
			const res = await fetch(`${BACKEND_URL}/api/tests`, {
				method: "POST",
				body: fd
			});
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			setForm({
				title: "",
				courseCode: "",
				year: "",
				teacherName: ""
			});
			setThumbnail(null);
			setThumbnailFile(null);
			setPdfFile(null);
			setTagsInput("");
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ jsx("div", {
		className: "upload-page",
		children: /* @__PURE__ */ jsxs("main", {
			className: "main-content",
			children: [/* @__PURE__ */ jsxs("section", {
				className: "left-column",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "card thumbnail-card overflow-hidden",
						onClick: () => thumbnailInputRef.current?.click(),
						onDragOver: (e) => e.preventDefault(),
						onDrop: (e) => {
							e.preventDefault();
							const file = e.dataTransfer.files?.[0];
							if (file && file.type.startsWith("image/")) {
								setThumbnail(URL.createObjectURL(file));
								setThumbnailFile(file);
							}
						},
						children: [/* @__PURE__ */ jsx("input", {
							ref: thumbnailInputRef,
							type: "file",
							accept: "image/*",
							hidden: true,
							onChange: handleThumbnailUpload
						}), thumbnail ? /* @__PURE__ */ jsx("img", {
							src: thumbnail,
							alt: "thumbnail",
							className: "thumbnail-preview"
						}) : /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "thumbnail-title",
								children: "Thumbnail"
							}), /* @__PURE__ */ jsxs("p", {
								className: "thumbnail-subtitle",
								children: [
									"Upload an image or drag",
									/* @__PURE__ */ jsx("br", {}),
									"and drop your thumbnail here!",
									/* @__PURE__ */ jsx("br", {}),
									"(optional)"
								]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "card pdf-card",
						onClick: () => pdfInputRef.current?.click(),
						onDragOver: (e) => e.preventDefault(),
						onDrop: (e) => {
							e.preventDefault();
							const file = e.dataTransfer.files?.[0];
							if (file && file.type === "application/pdf") setPdfFile(file);
						},
						children: [
							/* @__PURE__ */ jsx("input", {
								ref: pdfInputRef,
								type: "file",
								accept: ".pdf",
								hidden: true,
								onChange: (e) => setPdfFile(e.target.files?.[0] ?? null)
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "pdf-title",
								children: pdfFile ? pdfFile.name : "Test PDF"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "pdf-subtitle",
								children: pdfFile ? "Click or drag to replace" : /* @__PURE__ */ jsxs(Fragment, { children: [
									"Upload a PDF or drag",
									/* @__PURE__ */ jsx("br", {}),
									"and drop your test here!"
								] })
							})
						]
					}),
					error && /* @__PURE__ */ jsx("p", {
						className: "error-text",
						children: error
					}),
					/* @__PURE__ */ jsx("button", {
						className: "upload-btn",
						onClick: handleSubmit,
						disabled: loading,
						children: loading ? "Uploading…" : "Upload"
					})
				]
			}), /* @__PURE__ */ jsxs("section", {
				className: "right-column",
				children: [
					/* @__PURE__ */ jsx("input", {
						className: "field title-field",
						placeholder: "Title",
						name: "title",
						value: form.title,
						onChange: handleChange
					}),
					/* @__PURE__ */ jsx("label", {
						className: "field-label",
						children: "Description"
					}),
					/* @__PURE__ */ jsx("textarea", {
						className: "field description-field",
						placeholder: "text here (optional)"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "row",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "field-group",
							children: [/* @__PURE__ */ jsx("label", {
								className: "field-label",
								children: "Subject"
							}), /* @__PURE__ */ jsxs("div", {
								className: "select-wrapper",
								children: [/* @__PURE__ */ jsxs("select", {
									className: "field select-field",
									name: "courseCode",
									value: form.courseCode,
									onChange: handleChange,
									children: [
										/* @__PURE__ */ jsx("option", { value: "" }),
										/* @__PURE__ */ jsx("option", { children: "MHF4U" }),
										/* @__PURE__ */ jsx("option", { children: "MCV4U" }),
										/* @__PURE__ */ jsx("option", { children: "SCH4U" }),
										/* @__PURE__ */ jsx("option", { children: "SPH4U" }),
										/* @__PURE__ */ jsx("option", { children: "SBI4U" }),
										/* @__PURE__ */ jsx("option", { children: "ICS4U" }),
										/* @__PURE__ */ jsx("option", { children: "ENG4U" })
									]
								}), /* @__PURE__ */ jsx("span", {
									className: "arrow",
									children: "⌄"
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "field-group year-group",
							children: [/* @__PURE__ */ jsx("label", {
								className: "field-label",
								children: "Year"
							}), /* @__PURE__ */ jsxs("div", {
								className: "select-wrapper",
								children: [/* @__PURE__ */ jsxs("select", {
									className: "field select-field",
									name: "year",
									value: form.year,
									onChange: handleChange,
									children: [
										/* @__PURE__ */ jsx("option", { value: "" }),
										/* @__PURE__ */ jsx("option", { children: "2021" }),
										/* @__PURE__ */ jsx("option", { children: "2022" }),
										/* @__PURE__ */ jsx("option", { children: "2023" }),
										/* @__PURE__ */ jsx("option", { children: "2024" }),
										/* @__PURE__ */ jsx("option", { children: "2025" }),
										/* @__PURE__ */ jsx("option", { children: "2026" })
									]
								}), /* @__PURE__ */ jsx("span", {
									className: "arrow",
									children: "⌄"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ jsx("input", {
						className: "field",
						placeholder: "Enter your teacher's name",
						name: "teacherName",
						value: form.teacherName,
						onChange: handleChange
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "field-label",
						children: ["Tags ", /* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "12px",
								opacity: .6
							},
							children: "(one per line)"
						})]
					}),
					/* @__PURE__ */ jsx("textarea", {
						className: "field tags-field",
						value: tagsInput,
						onChange: (e) => setTagsInput(e.target.value),
						placeholder: "Trivial\nApplications\nUnit 4"
					})
				]
			})]
		})
	});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-D5GxnEHa.js",
		"imports": ["/assets/jsx-runtime-B1Muan2w.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-CSlTvpgP.js",
			"imports": ["/assets/jsx-runtime-B1Muan2w.js", "/assets/Navbar-CW_pOO9f.js"],
			"css": ["/assets/root-B1erP-ys.css", "/assets/Navbar-d2lXtJqe.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/hero/hero": {
			"id": "routes/hero/hero",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/hero-CE2MP6Gb.js",
			"imports": ["/assets/jsx-runtime-B1Muan2w.js"],
			"css": ["/assets/hero-O5W3c6ci.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"accesibility-route": {
			"id": "accesibility-route",
			"parentId": "root",
			"path": "accesibility",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/accesibility-9Dk80KNs.js",
			"imports": ["/assets/jsx-runtime-B1Muan2w.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"archive-route": {
			"id": "archive-route",
			"parentId": "root",
			"path": "archive",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/archive-BLC-sAhn.js",
			"imports": ["/assets/jsx-runtime-B1Muan2w.js"],
			"css": ["/assets/archive-C5OZdP29.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"hero-route": {
			"id": "hero-route",
			"parentId": "root",
			"path": "hero",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/hero-CE2MP6Gb.js",
			"imports": ["/assets/jsx-runtime-B1Muan2w.js"],
			"css": ["/assets/hero-O5W3c6ci.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"merge-route": {
			"id": "merge-route",
			"parentId": "root",
			"path": "merge",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/merge-J9OsKUye.js",
			"imports": ["/assets/jsx-runtime-B1Muan2w.js", "/assets/Navbar-CW_pOO9f.js"],
			"css": ["/assets/merge-CEzWtuqZ.css", "/assets/Navbar-d2lXtJqe.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"timer-route": {
			"id": "timer-route",
			"parentId": "root",
			"path": "timer",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/timer-wDaYvY1A.js",
			"imports": ["/assets/jsx-runtime-B1Muan2w.js"],
			"css": ["/assets/timer-MVQapVHt.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"upload-route": {
			"id": "upload-route",
			"parentId": "root",
			"path": "upload",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/upload-C_upPjzQ.js",
			"imports": ["/assets/jsx-runtime-B1Muan2w.js"],
			"css": ["/assets/upload-N4BPLbvx.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-82a03828.js",
	"version": "82a03828",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"unstable_passThroughRequests": false,
	"unstable_subResourceIntegrity": false,
	"unstable_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/hero/hero": {
		id: "routes/hero/hero",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: hero_exports
	},
	"accesibility-route": {
		id: "accesibility-route",
		parentId: "root",
		path: "accesibility",
		index: void 0,
		caseSensitive: void 0,
		module: accesibility_exports
	},
	"archive-route": {
		id: "archive-route",
		parentId: "root",
		path: "archive",
		index: void 0,
		caseSensitive: void 0,
		module: archive_exports
	},
	"hero-route": {
		id: "hero-route",
		parentId: "root",
		path: "hero",
		index: void 0,
		caseSensitive: void 0,
		module: hero_exports
	},
	"merge-route": {
		id: "merge-route",
		parentId: "root",
		path: "merge",
		index: void 0,
		caseSensitive: void 0,
		module: merge_exports
	},
	"timer-route": {
		id: "timer-route",
		parentId: "root",
		path: "timer",
		index: void 0,
		caseSensitive: void 0,
		module: timer_exports
	},
	"upload-route": {
		id: "upload-route",
		parentId: "root",
		path: "upload",
		index: void 0,
		caseSensitive: void 0,
		module: upload_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
